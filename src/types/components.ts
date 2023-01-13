import React from "react";
import { ContextDispatch, ContextState } from "src/store/context";

interface ComponentsBase {
  name: never; // 必须重新匹配
  props?: Record<string, unknown>; // 传递给组件的默认`props`
  style?: React.CSSProperties; // 样式配置信息
  config?: Record<string, unknown>; // 配置信息
}
export interface BaseLocalComponent extends ComponentsBase {
  type: "local";
}
export interface BaseRemoteComponent extends ComponentsBase {
  type: "remote";
}

type PureLocalComponent = LocalComponentMap[keyof LocalComponentMap];
type PureRemoteComponent = RemoteComponentMap[keyof RemoteComponentMap];

export interface Panel {
  control: {
    icon: JSX.Element;
    name: string;
    getConfig: () => LocalComponentConfig;
  }; // 组件面板
  main: React.FC<{
    dispatch: ContextDispatch;
    instance: LocalComponentConfig;
    isRender: boolean;
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

export type LocalComponent = PureLocalComponent & {
  module: Panel;
};
export type RemoteComponent = PureRemoteComponent & {
  url: string;
};

export type LocalComponentConfig = PureLocalComponent & {
  id: string; // uuid
  props: Record<string, unknown>;
  style: React.CSSProperties;
  config: Record<string, unknown>;
  children: LocalComponentConfig[];
  [key: string]: unknown;
};
export type RemoteComponentConfig = PureRemoteComponent & {
  id: string; // uuid
  props: Record<string, unknown>;
  style: React.CSSProperties;
  config: Record<string, unknown>;
  children: RemoteComponentConfig[];
  [key: string]: unknown;
};
