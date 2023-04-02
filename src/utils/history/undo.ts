import { CLD } from "src/store/reducer";

export type HistoryType = "undo" | "redo" | "collect" | "clear";
export type HistoryCallback = (data: {
  type: HistoryType;
  undoLength: number;
  redoLength: number;
}) => void;

class HistoryModule<T> {
  private undoStack: T[];
  private redoStack: T[];
  private max: number;
  private events: HistoryCallback[];

  constructor() {
    this.undoStack = [];
    this.redoStack = [];
    this.max = 10;
    this.events = [];
  }

  public collect(data: T): void {
    this.undoStack.push(data);
    this.redoStack = [];
    if (this.undoStack.length > this.max) {
      this.undoStack.shift();
    }
    this.call("collect");
  }

  public undo(): T | null {
    const data = this.undoStack.pop();
    data && this.redoStack.push(data);
    this.call("undo");
    return data || null;
  }

  public redo(): T | null {
    const data = this.redoStack.pop();
    data && this.undoStack.push(data);
    this.call("redo");
    return data || null;
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
