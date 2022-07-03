import React, { createContext } from "react";
import { Actions } from "./actions";
import { reducer, State } from "./reducer";
import { useImmerReducer } from "use-immer";

export const EDITOR_MODE = {
  EDITOR: "editor" as const,
  RENDER: "render" as const,
};
export interface ContextProps {
  state: State;
  mode: typeof EDITOR_MODE.EDITOR | typeof EDITOR_MODE.RENDER;
  dispatch: (v: Actions) => void;
}

export type ContextState = ContextProps["state"];
export type ContextDispatch = ContextProps["dispatch"];
export type ContextSelectedNode = ContextProps["state"]["selectedNode"];

const defaultContext: ContextProps = {
  state: {
    cld: { user: "", date: new Date(), children: [] },
    selectedNode: { id: "", name: "" },
  },
  mode: EDITOR_MODE.EDITOR,
  dispatch: () => void 0,
};
export const AppContext = createContext<ContextProps>(defaultContext);
export const AppProvider: React.FC<{ mode?: ContextProps["mode"] }> = props => {
  const { mode = EDITOR_MODE.EDITOR, children } = props;
  const [state, dispatch] = useImmerReducer(reducer, defaultContext.state);
  return <AppContext.Provider value={{ state, mode, dispatch }}>{children}</AppContext.Provider>;
};
