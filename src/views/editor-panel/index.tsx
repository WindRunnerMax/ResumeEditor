import "../index.scss";
import { IconEdit, IconQuestionCircle } from "@arco-design/web-react/icon";
import { useContext, useMemo } from "react";
import { AppContext } from "src/store/context";
import { getComponentInstanceSync } from "src/utils/components-utils";
import { CustomCSS } from "./components/custom-css";
import { Button, Link, Popover } from "@arco-design/web-react";

export const EditorPanel: React.FC<{
  className: string;
  exportPDF: () => void;
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
        <div className="view-container-title a-y-center a-flex-space-between">
          <div>
            <IconEdit style={{ fontSize: 18 }} />
            <span className="a-ml">编辑</span>
          </div>
          <div>
            <Link type="text" onClick={props.exportPDF}>
              导出PDF
            </Link>
            <Popover
              title="注意"
              position="right"
              content={<span>请关注右侧的简历导出注意事项</span>}
            >
              <Button size="mini" type="text" icon={<IconQuestionCircle />}></Button>
            </Popover>
          </div>
        </div>
        <div className="view-container-body">{EditorPanel}</div>
      </div>
    </div>
  );
};
