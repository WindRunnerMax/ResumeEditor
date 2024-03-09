import "./index.scss";
import { LocalComponentConfig } from "src/types/components";
import { IconAlignCenter, IconCopy, IconDelete, IconFullscreen } from "@arco-design/web-react/icon";
import { ContextDispatch } from "src/store/context";
import { Button, Trigger } from "@arco-design/web-react";
import { actions } from "src/store/actions";
import { Layout } from "react-grid-layout";
import { cloneDeep } from "lodash";
import { v4 as uuid } from "uuid";
import { isObject } from "src/utils/common/is";
import { useEffect, useState } from "react";

export const ToolBar: React.FC<{
  selectedId: string;
  dispatch: ContextDispatch;
  config: LocalComponentConfig;
  cols: number;
  display: boolean;
}> = props => {
  const [visible, setVisible] = useState(false);
  const { selectedId, dispatch, config, cols } = props;

  useEffect(() => {
    setVisible(props.display && selectedId === config.id);
  }, [config.id, props.display, props.selectedId, selectedId]);

  const deleteBaseSection = () => {
    dispatch({ type: actions.DELETE_ONE_BY_UUID, payload: config.id });
    dispatch({ type: actions.SELECT_NODE, payload: { id: "", name: "" } });
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

  const copy = () => {
    const newId = uuid();
    const newConfig = { config: { ...cloneDeep(config), id: newId } };
    if (isObject(newConfig.config.config.layout)) newConfig.config.config.layout.i = newId;
    dispatch({
      type: actions.ADD_SECTION,
      payload: newConfig,
    });
  };

  const Menu = (
    <div className="pedestal-main-item-toolbar">
      <Button icon={<IconCopy />} onClick={copy} type="text" />
      <Button icon={<IconFullscreen />} onClick={fullScreen} type="text" />
      <Button icon={<IconAlignCenter />} onClick={toCenterBaseSection} type="text" />
      <Button icon={<IconDelete />} onClick={deleteBaseSection} type="text" />
    </div>
  );

  return (
    <Trigger
      popupVisible={visible}
      popup={() => Menu}
      position="top"
      trigger="contextMenu"
      popupAlign={{ top: 5 }}
    >
      {props.children}
    </Trigger>
  );
};
