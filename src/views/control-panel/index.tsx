import "../index.scss";
import { useContext, useMemo } from "react";
import { actions } from "src/store/actions";
import { AppContext } from "src/store/context";
import { components } from "src/utils/components-loader";
import { IconMindMapping } from "@arco-design/web-react/icon";
import { findIndexInSections } from "src/utils/node-tree-utils";
import { isEmptyValue } from "src/utils/common/is";
import { useMemoizedFn } from "ahooks";
import React from "react";
import { LocalComponentConfig } from "src/types/components-types";

export const ControlPanel: React.FC<{ className: string }> = props => {
  const { state, dispatch } = useContext(AppContext);
  const controls = components.map(item => item.module.control);

  // Event useMemoizedFn
  const addSection = useMemoizedFn((cld: LocalComponentConfig) => {
    if (state.selectedNode.id) {
      const index = findIndexInSections(state.cld.children, state.selectedNode.id);
      if (!isEmptyValue(index)) {
        dispatch({
          type: actions.ADD_SECTION,
          payload: { config: cld, index },
        });
      }
    } else {
      dispatch({ type: actions.ADD_SECTION, payload: { config: cld } });
    }
    dispatch({ type: actions.SELECT_NODE, payload: { id: cld.id, name: cld.name } });
  });

  const renderControl = useMemo(
    () => (
      <div className="view-control-panel">
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
      </div>
    ),
    [addSection, controls]
  );
  return <div className={props.className}>{renderControl}</div>;
};
