import { Button, Dropdown, Menu } from "@arco-design/web-react";
import { IconDown, IconGithub, IconRedo, IconUndo } from "@arco-design/web-react/icon";
import { FC, useContext } from "react";
import styles from "../index.module.scss";
import { cs } from "src/utils/common/style";
import { useHistory } from "src/hooks/useHistory";
import { AppContext } from "src/store/context";
import { exportJSON } from "../utils/export-json";

export const Right: FC<{
  exportPDF: () => void;
}> = props => {
  const { state, dispatch } = useContext(AppContext);
  const { history, undoable, redoable } = useHistory();

  const undo = () => {
    const cld = undoable && history.undo();
    cld && dispatch({ type: "REPLACE_STATE", payload: cld });
  };

  const redo = () => {
    const cld = redoable && history.redo();
    cld && dispatch({ type: "REPLACE_STATE", payload: cld });
  };

  return (
    <div className={cs(styles.externalGroup)}>
      <div className={styles.history}>
        <Button
          onClick={undo}
          disabled={!undoable}
          iconOnly
          icon={<IconUndo />}
          type="text"
          size="small"
        ></Button>
        <Button
          onClick={redo}
          disabled={!redoable}
          iconOnly
          icon={<IconRedo />}
          type="text"
          size="small"
        ></Button>
      </div>
      <Dropdown
        droplist={
          <Menu className={styles.menu}>
            <Menu.Item key="-1">
              <a target="_blank" href="https://github.com/WindrunnerMax/ResumeEditor">
                GitHub
              </a>
            </Menu.Item>
            <Menu.Item key="0">
              <a
                target="_blank"
                href="https://github.com/WindrunnerMax/ResumeEditor#%E5%AF%BC%E5%87%BApdf"
              >
                导出功能
              </a>
            </Menu.Item>
            <Menu.Item key="1">
              <a target="_blank" href="https://github.com/WindrunnerMax/ResumeEditor/issues/2">
                常见问题
              </a>
            </Menu.Item>
          </Menu>
        }
        trigger="click"
        position="br"
      >
        <Button size="mini" type="text">
          使用必读
          <IconDown />
        </Button>
      </Dropdown>
      <Dropdown
        droplist={
          <Menu className={styles.menu}>
            <Menu.Item key="1">
              <a href="?preview" target="_blank">
                实时预览
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="?json" target="_blank">
                JSON编辑
              </a>
            </Menu.Item>
          </Menu>
        }
        trigger="click"
        position="br"
      >
        <Button size="mini" type="text">
          操作
          <IconDown />
        </Button>
      </Dropdown>
      <Dropdown
        droplist={
          <Menu className={styles.menu}>
            <Menu.Item key="0">
              <div className={styles.export} onClick={() => props.exportPDF()}>
                PDF
              </div>
            </Menu.Item>
            <Menu.Item key="1">
              <div className={styles.export} onClick={() => exportJSON(state.cld)}>
                JSON
              </div>
            </Menu.Item>
          </Menu>
        }
        trigger="click"
        position="br"
      >
        <Button size="mini" type="text">
          导出
          <IconDown />
        </Button>
      </Dropdown>
      <a
        className={styles.github}
        target="_blank"
        href={"https://github.com/WindrunnerMax/ResumeEditor"}
      >
        <IconGithub />
      </a>
    </div>
  );
};
