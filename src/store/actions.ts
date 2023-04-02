import { LocalComponentConfig } from "src/types/components";
import { CLD } from "./reducer";

export const actions = {
  INIT_STATE: "INIT_STATE",
  REPLACE_STATE: "REPLACE_STATE",
  ADD_SECTION: "ADD_SECTION",
  ADD_CHILD_SECTION: "ADD_CHILD_SECTION",
  SWAP_SECTION: "SWAP_SECTION",
  DELETE_SECTION: "DELETE_SECTION",
  DELETE_ONE_BY_UUID: "DELETE_ONE_BY_UUID",
  UPDATE_ONE: "UPDATE_ONE",
  UPDATE_ONE_NO_UNDO: "UPDATE_ONE_NO_UNDO",
  SELECT_NODE: "SELECT_NODE",
  UPDATE_ALL: "UPDATE_ALL",
} as const;

interface INIT_STATE {
  type: typeof actions.INIT_STATE;
  payload: CLD;
}
interface REPLACE_STATE {
  type: typeof actions.REPLACE_STATE;
  payload: CLD;
}
interface ADD_SECTION {
  type: typeof actions.ADD_SECTION;
  payload: { config: LocalComponentConfig; index?: number };
}
interface ADD_CHILD_SECTION {
  type: typeof actions.ADD_CHILD_SECTION;
  payload: { uuid: string; config: LocalComponentConfig };
}
interface SWAP_SECTION {
  type: typeof actions.SWAP_SECTION;
  payload: [number, number];
}
interface DELETE_SECTION {
  type: typeof actions.DELETE_SECTION;
  payload: number;
}
interface DELETE_ONE_BY_UUID {
  type: typeof actions.DELETE_ONE_BY_UUID;
  payload: string;
}
interface UPDATE_ONE {
  type: typeof actions.UPDATE_ONE;
  payload: { id: string; key: string; data: unknown; merge?: boolean };
}
interface UPDATE_ONE_NO_UNDO {
  type: typeof actions.UPDATE_ONE_NO_UNDO;
  payload: { id: string; key: string; data: unknown; merge?: boolean };
}
interface UPDATE_ALL {
  type: typeof actions.UPDATE_ALL;
  payload: { data: LocalComponentConfig[] };
}
interface SELECT_NODE {
  type: typeof actions.SELECT_NODE;
  payload: { id: string; name: string };
}

export type Actions =
  | INIT_STATE
  | REPLACE_STATE
  | ADD_SECTION
  | ADD_CHILD_SECTION
  | SWAP_SECTION
  | DELETE_SECTION
  | DELETE_ONE_BY_UUID
  | SELECT_NODE
  | UPDATE_ONE
  | UPDATE_ONE_NO_UNDO
  | UPDATE_ALL;
