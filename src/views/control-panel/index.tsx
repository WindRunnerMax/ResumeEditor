import "./index.scss";
import { useContext, useMemo, useState } from "react";
import { actions } from "src/store/actions";
import { AppContext } from "src/store/context";
import { components } from "src/utils/components-loader";
import { IconMindMapping } from "@arco-design/web-react/icon";
import { findIndexInSections } from "src/utils/node-tree-utils";
import { isEmptyValue } from "src/utils/common/is";
import { useMemoizedFn } from "ahooks";
import React from "react";
import { LocalComponentConfig } from "src/types/components";
import { templateConfig, templateLoader } from "src/utils/template-loader";
import { Message, Modal } from "@arco-design/web-react";
import { CLD } from "src/store/reducer";

export const ControlPanel: React.FC<{ className: string }> = props => {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const controls = components.map(item => item.module.control);

  // Event useMemoizedFn
  const addSection = useMemoizedFn((cld: LocalComponentConfig) => {
    if (state.selectedNode.id) {
      const index = findIndexInSections(state.cld.children, state.selectedNode.id);
      if (!isEmptyValue(index)) {
        dispatch({ type: actions.ADD_SECTION, payload: { config: cld, index } });
      }
    } else {
      dispatch({ type: actions.ADD_SECTION, payload: { config: cld } });
    }
    dispatch({ type: actions.SELECT_NODE, payload: { id: cld.id, name: cld.name } });
  });

  const loadTemplateConfig = useMemoizedFn((src: string) => {
    Modal.confirm({
      title: "警告",
      content: "确定要加载模版吗，当前的数据将会被覆盖。",
      confirmLoading: loading,
      onConfirm: async () => {
        setLoading(true);
        const res: CLD | null = await templateLoader(src);
        setLoading(false);
        if (!res) return Message.error("模版加载失败");
        res.user = "Czy";
        res.date = new Date();
        dispatch({ type: actions.INIT_STATE, payload: res });
      },
    });
  });

  const renderControl = useMemo(
    () => (
      <>
        <div className="view-container-title a-y-center">
          <IconMindMapping style={{ fontSize: 18 }} />
          <span className="a-ml">预设</span>
        </div>
        <div className="sub-title">组件</div>
        <div className="view-container-body pedestal-control-container">
          {controls.map((config, index) => (
            <div key={index} className="control-button-container">
              <div
                className="a-x-center a-y-center a-flex-column a-pointer control-button"
                onClick={() => addSection(config.getConfig())}
              >
                {config.icon}
                <div>{config.name}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
    [addSection, controls]
  );

  const templateControl = useMemo(
    () => (
      <>
        <div className="sub-title">模版</div>
        <div className="template-container">
          {templateConfig.map((item, index) => (
            <div
              key={index}
              onClick={() => loadTemplateConfig(item.template)}
              className="template-item"
            >
              <div className="img-container">
                <img src={item.label}></img>
              </div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </>
    ),
    [loadTemplateConfig]
  );

  return (
    <div className={props.className}>
      <div className="view-control-panel">
        {renderControl}
        {templateControl}
      </div>
    </div>
  );
};
