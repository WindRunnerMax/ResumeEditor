import "../index.scss";
import { IconEdit } from "@arco-design/web-react/icon";
import { useContext, useMemo } from "react";
import { AppContext } from "src/store/context";
import { getComponentInstanceSync } from "src/utils/components-utils";
import { CustomCSS } from "./components/custom-css";

export const EditorPanel: React.FC<{ className: string }> = props => {
  const { state, dispatch } = useContext(AppContext);

  const renderEditor = () => {
    const [selectNodeName] = state.selectedNode.name.split(".");
    if (!selectNodeName) return null;
    const componentInstance = getComponentInstanceSync(selectNodeName);
    if (!componentInstance || !componentInstance.main) return null;
    const Component = componentInstance.editor;
    return (
      <>
        <Component state={state} dispatch={dispatch}></Component>
        <CustomCSS state={state} dispatch={dispatch}></CustomCSS>
      </>
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const EditorPanel = useMemo(() => renderEditor(), [state.selectedNode.id]);

  return (
    <div className={props.className}>
      <div className="view-editor-panel">
        <div className="view-container-title a-y-center">
          <IconEdit style={{ fontSize: 18 }} />
          <span className="a-ml">编辑</span>
        </div>
        <div className="view-container-body">{EditorPanel}</div>
      </div>
    </div>
  );
};
