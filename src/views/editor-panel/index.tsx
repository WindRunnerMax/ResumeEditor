import "./index.scss";
import { useContext, useMemo } from "react";
import { AppContext } from "src/store/context";
import { getComponentInstanceSync } from "src/utils/loader/components-utils";
import { CustomCSS } from "./components/custom-css";

export const EditorPanel: React.FC<{
  className: string;
}> = props => {
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
        <div className="view-container-body">
          {EditorPanel || <div className="a-fontsize-13 a-color-grey">选择组件以编辑</div>}
        </div>
      </div>
    </div>
  );
};
