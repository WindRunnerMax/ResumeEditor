import { LocalComponentConfig } from "src/types/components-types";
import { CLD } from "./reducer";

export const actions = {
  INIT_STATE: "INIT_STATE" as const,
  ADD_SECTION: "ADD_SECTION" as const,
  ADD_CHILD_SECTION: "ADD_CHILD_SECTION" as const,
  SWAP_SECTION: "SWAP_SECTION" as const,
  DELETE_SECTION: "DELETE_SECTION" as const,
  DELETE_ONE_BY_UUID: "DELETE_ONE_BY_UUID" as const,
  UPDATE_ONE: "UPDATE_ONE" as const,
  SELECT_NODE: "SELECT_NODE" as const,
  UPDATE_ALL: "UPDATE_ALL" as const,
};

interface INIT_STATE {
  type: typeof actions.INIT_STATE;
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
  payload: { id: string; key: string; data: unknown };
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
  | ADD_SECTION
  | ADD_CHILD_SECTION
  | SWAP_SECTION
  | DELETE_SECTION
  | DELETE_ONE_BY_UUID
  | SELECT_NODE
  | UPDATE_ONE
  | UPDATE_ALL;
