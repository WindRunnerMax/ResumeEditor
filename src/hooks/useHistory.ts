import { cloneDeep } from "lodash";
import { CLD } from "src/store/reducer";

export type HistoryType = "undo" | "redo" | "collect" | "clear";
export type HistoryCallback = (data: {
  type: HistoryType;
  undoLength: number;
  redoLength: number;
}) => void;

class HistoryModule<T> {
  private current: T | null;
  private undoStack: T[];
  private redoStack: T[];
  private max: number;
  private events: HistoryCallback[];

  constructor() {
    this.undoStack = [];
    this.redoStack = [];
    this.max = 10;
    this.events = [];
    this.current = null;
  }

  public collect(data: T): void {
    if (this.current) {
      this.undoStack.push(this.current);
      this.redoStack = [];
      if (this.undoStack.length > this.max) {
        this.undoStack.shift();
      }
    }
    this.current = cloneDeep(data);
    this.call("collect");
  }

  public undo(): T | null {
    const data = this.undoStack.pop();
    if (data) {
      this.current && this.redoStack.push(this.current);
      this.current = data;
      this.call("undo");
      return data;
    }
    return null;
  }

  public redo(): T | null {
    const data = this.redoStack.pop();
    if (data) {
      this.current && this.undoStack.push(this.current);
      this.current = data;
      this.call("redo");
      return data;
    }
    return null;
  }

  public undoable(): boolean {
    return this.undoStack.length > 0;
  }

  public redoable(): boolean {
    return this.redoStack.length > 0;
  }

  public clear(): void {
    this.redoStack = [];
    this.undoStack = [];
    this.call("clear");
  }

  public on(callback: HistoryCallback): void {
    this.events.push(callback);
  }

  public off(callback: HistoryCallback): void {
    const index = this.events.indexOf(callback);
    if (index > -1) {
      this.events.splice(index, 1);
    }
  }

  private call(type: HistoryType): void {
    this.events.forEach(callback => {
      callback({
        type,
        undoLength: this.undoStack.length,
        redoLength: this.redoStack.length,
      });
    });
  }
}

export const history = new HistoryModule<CLD>();

export const useHistory = () => {
  const undoable = history.undoable();
  const redoable = history.redoable();

  return { history, undoable, redoable };
};
