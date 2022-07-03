import React from "react";
import { ContextDispatch, ContextState } from "src/store/context";

export interface Panel {
  control: {
    icon: JSX.Element;
    name: string;
    getConfig: () => LocalComponentConfig;
  }; // 组件面板
  main: React.FC<{
    dispatch: ContextDispatch;
    instance: LocalComponentConfig;
    [key: string]: unknown;
  }>; // 主面板
  editor: React.FC<{
    state: ContextState;
    dispatch: ContextDispatch;
    [key: string]: unknown;
  }>; // 编辑面板
}
export type ControlPanelFC = Panel["control"];
export type MainPanelFC = Panel["main"];
export type EditorPanelFC = Panel["editor"];

interface ComponentsBase {
  name: string;
  props?: Record<string, unknown>; // 传递给组件的默认`props`
  style?: React.CSSProperties; // 样式配置信息
  config?: Record<string, unknown>; // 配置信息
}
export interface LocalComponent extends ComponentsBase {
  module: Panel;
}

type OmitProps = "module";
type PurgeLocalComponent = Omit<LocalComponent, OmitProps>;
export type LocalComponentConfig = PurgeLocalComponent & {
  id: string; // uuid
  props: Record<string, unknown>;
  style: React.CSSProperties;
  config: Record<string, unknown>;
  children: LocalComponentConfig[];
  [key: string]: unknown;
};
