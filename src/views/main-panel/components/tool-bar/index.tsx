import "./index.scss";
import { LocalComponentConfig } from "src/types/components-types";
import { IconAlignCenter, IconDelete, IconFullscreen } from "@arco-design/web-react/icon";
import { ContextDispatch } from "src/store/context";
import { Button, Trigger } from "@arco-design/web-react";
import { actions } from "src/store/actions";
import { Layout } from "react-grid-layout";

export const ToolBar: React.FC<{
  selectedId: string;
  dispatch: ContextDispatch;
  config: LocalComponentConfig;
  cols: number;
}> = props => {
  const { selectedId, dispatch, config, cols } = props;

  const deleteBaseSection = () => {
    dispatch({ type: actions.DELETE_ONE_BY_UUID, payload: config.id });
  };

  const toCenterBaseSection = () => {
    if (config.config.layout) {
      const layout = config.config.layout as Layout;
      dispatch({
        type: actions.UPDATE_ONE,
        payload: { id: config.id, key: "config.layout.x", data: cols / 2 - layout.w / 2 },
      });
    }
  };

  const fullScreen = () => {
    if (config.config.layout) {
      dispatch({
        type: actions.UPDATE_ONE,
        payload: { id: config.id, key: "config.layout.w", data: cols },
      });
    }
  };

  const Menu = (
    <div className="pedestal-main-item-toolbar">
      <Button icon={<IconFullscreen />} onClick={fullScreen} type="text" />
      <Button icon={<IconAlignCenter />} onClick={toCenterBaseSection} type="text" />
      <Button icon={<IconDelete />} onClick={deleteBaseSection} type="text" />
    </div>
  );

  return (
    <Trigger
      popupVisible={selectedId === config.id}
      popup={() => Menu}
      position="top"
      trigger="contextMenu"
    >
      {props.children}
    </Trigger>
  );
};
