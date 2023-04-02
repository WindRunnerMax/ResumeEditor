import { LocalComponentConfig } from "src/types/components";
import { isEmptyValue } from "src/utils/common/is";
import {
  deleteOneInNodeTree,
  findOneInNodeTree,
  updateOneInNodeTree,
} from "src/utils/iterator/node-tree-utils";
import { Actions, actions } from "./actions";
import { history } from "../hooks/useHistory";
export const CLD_STORAGE_KEY = "cld";

// Component Layout Data
export type CLD = { user: string; date: Date; children: LocalComponentConfig[] };
export type SelectedNode = { id: string; name: string }; // id: uuid, type: module.name
export interface State {
  cld: CLD;
  selectedNode: SelectedNode;
}

export const reducer = (state: State, action: Actions): void | State => {
  switch (action.type) {
    case actions.INIT_STATE: {
      state.cld = action.payload;
      break;
    }
    case actions.REPLACE_STATE: {
      state.cld = action.payload;
      state.selectedNode = { id: "", name: "" };
      break;
    }
    case actions.ADD_SECTION: {
      const { config, index } = action.payload;
      if (isEmptyValue(index)) {
        state.cld.children.push(config);
      } else {
        state.cld.children.splice(index + 1, 0, config);
      }
      history.collect(state.cld);
      break;
    }
    case actions.ADD_CHILD_SECTION: {
      const { uuid, config } = action.payload;
      const curNode = findOneInNodeTree(state.cld.children, uuid);
      curNode && curNode.children.push(config);
      history.collect(state.cld);
      break;
    }
    case actions.DELETE_SECTION: {
      const index = action.payload;
      state.cld.children.splice(index, 1);
      history.collect(state.cld);
      break;
    }
    case actions.DELETE_ONE_BY_UUID: {
      const uuid = action.payload;
      deleteOneInNodeTree(state.cld.children, uuid);
      history.collect(state.cld);
      break;
    }
    case actions.UPDATE_ONE: {
      const { id: uuid, key, data, merge = true } = action.payload;
      updateOneInNodeTree(state.cld.children, uuid, key, data, merge);
      history.collect(state.cld);
      break;
    }
    case actions.UPDATE_ALL: {
      const { data } = action.payload;
      state.cld.children = data;
      break;
    }
    case actions.SELECT_NODE: {
      if (state.selectedNode.id === action.payload.id) break;
      state.selectedNode = action.payload;
      break;
    }
  }
};
