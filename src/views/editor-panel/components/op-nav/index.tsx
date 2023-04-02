import { Link } from "@arco-design/web-react";
import "./index.scss";
import React, { useContext } from "react";
import { FC } from "react";
import { IconRedo, IconUndo } from "@arco-design/web-react/icon";
import { useHistory } from "src/hooks/useHistory";
import { AppContext } from "src/store/context";

export const OpNav: FC<{
  exportPDF: () => void;
}> = props => {
  const { history, undoable, redoable } = useHistory();

  const { dispatch } = useContext(AppContext);

  const undo = () => {
    const cld = undoable && history.undo();
    cld && dispatch({ type: "REPLACE_STATE", payload: cld });
  };

  const redo = () => {
    const cld = redoable && history.redo();
    cld && dispatch({ type: "REPLACE_STATE", payload: cld });
  };

  return (
    <React.Fragment>
      <div className="op-nav-label">链接</div>
      <div className="op-nav-body">
        <Link target="_blank" href="https://github.com/WindrunnerMax/ResumeEditor">
          Github
        </Link>
        <Link
          target="_blank"
          href="https://github.com/WindrunnerMax/ResumeEditor#%E5%AF%BC%E5%87%BApdf"
        >
          使用必读
        </Link>
        <Link target="_blank" href="https://github.com/WindrunnerMax/ResumeEditor/issues/2">
          常见问题
        </Link>
      </div>
      <div className="op-nav-label">操作</div>
      <div className="op-nav-body">
        <Link disabled={!undoable} onClick={undo}>
          <IconUndo style={{ marginRight: 3 }} />
          <span>后退</span>
        </Link>
        <Link disabled={!redoable} onClick={redo}>
          <span>前进</span>
          <IconRedo style={{ marginLeft: 3 }} />
        </Link>
      </div>
      <div className="op-nav-body">
        <Link href="?preview" target="_blank">
          实时预览
        </Link>
        <Link href="?json" target="_blank">
          JSON编辑
        </Link>
        <Link onClick={props.exportPDF}>导出PDF</Link>
      </div>
    </React.Fragment>
  );
};
