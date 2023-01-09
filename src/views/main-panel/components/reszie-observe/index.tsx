import React, { FC, useMemo } from "react";
import { ContextDispatch } from "src/store/context";
import { LocalComponentConfig, MainPanelFC } from "src/types/components";
import { withSize, SizeMeProps } from "react-sizeme";
import { Layout } from "react-grid-layout";
import { actions } from "src/store/actions";

export const ResizeObserverHOC: FC<{
  dispatch: ContextDispatch;
  instance: LocalComponentConfig;
  isRender: boolean;
  component: MainPanelFC;
  rowHeight: number;
}> = props => {
  const WrappedComponent = useMemo(
    () => withSize({ monitorHeight: true, monitorWidth: false, refreshRate: 50 })(props.component),
    [props.component]
  );

  const sizeChange = (size: SizeMeProps["size"]) => {
    if (!size.height || !props.instance.config.layout) return void 0;
    const layout = props.instance.config.layout as Layout;
    const rows = Math.ceil(size.height / props.rowHeight);
    if (layout.h === rows) return void 0;
    props.dispatch({
      type: actions.UPDATE_ONE,
      payload: { id: props.instance.id, key: "config.layout.h", data: rows },
    });
  };
  return (
    <WrappedComponent
      onSize={sizeChange}
      dispatch={props.dispatch}
      instance={props.instance}
      isRender={props.isRender}
    ></WrappedComponent>
  );
};
