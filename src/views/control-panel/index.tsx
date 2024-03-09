import styles from "./index.module.scss";
import { useContext, useMemo, useState } from "react";
import { actions } from "src/store/actions";
import { AppContext } from "src/store/context";
import { useMemoizedFn } from "ahooks";
import React from "react";
import { TEMPLATE_CONFIG, TemplateConfig, templateLoader } from "src/utils/loader/template-loader";
import { Message, Modal, Tabs } from "@arco-design/web-react";
import { CLD } from "src/store/reducer";
import { cs } from "src/utils/common/style";
import { IconClose } from "@arco-design/web-react/icon";
import { LocalComponentConfig } from "src/types/components";

const TabPane = Tabs.TabPane;

export const ControlPanel: React.FC<{ className: string; mobile?: boolean }> = props => {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const loadTemplate = useMemoizedFn((config: TemplateConfig) => {
    Modal.confirm({
      title: "警告",
      content: <div className="a-text-center">确定要加载模版吗，当前的数据将会被覆盖。</div>,
      confirmLoading: loading,
      onConfirm: async () => {
        setLoading(true);
        const res: CLD | null = await templateLoader(config.template);
        setLoading(false);
        if (!res) return Message.error("模版加载失败");
        res.user = "Czy";
        res.date = new Date();
        dispatch({ type: actions.INIT_STATE, payload: res });
      },
    });
  });

  const CONFIG = useMemo(() => {
    const result: TemplateConfig[][] = [];
    TEMPLATE_CONFIG.forEach((item, index) => {
      if (index % 2 === 0) result.push([item]);
      else result[Math.floor(index / 2)].push(item);
    });
    return result;
  }, []);

  const getConfig = (item: TemplateConfig) => {
    if (!item) return void 0;
    return (
      <div className={styles.preview}>
        <div className={styles.imgContainer}>
          <img src={item.image}></img>
        </div>
        <div className={styles.name}>{item.name}</div>
      </div>
    );
  };

  const templateTabPanel = useMemo(
    () => (
      <React.Fragment>
        <div className={styles.template}>
          {CONFIG.map((row, rowIndex) => (
            <div className={styles.row} key={rowIndex}>
              <div className={styles.item} onClick={() => row[0] && loadTemplate(row[0])}>
                {getConfig(row[0])}
              </div>
              <div
                className={cs(styles.item, !row[1] && styles.hidden)}
                onClick={() => row[1] && loadTemplate(row[1])}
              >
                {getConfig(row[1])}
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    ),
    [CONFIG, loadTemplate]
  );

  const onSelectNode = useMemoizedFn((config: LocalComponentConfig) => {
    if (config.id !== state.selectedNode.id) {
      dispatch({
        type: actions.SELECT_NODE,
        payload: { id: config.id, name: config.name },
      });
    } else {
      dispatch({
        type: actions.SELECT_NODE,
        payload: { id: config.id, name: config.name },
      });
    }
  });

  const onDeleteNode = useMemoizedFn((config: LocalComponentConfig) => {
    dispatch({ type: actions.DELETE_ONE_BY_UUID, payload: config.id });
    dispatch({ type: actions.SELECT_NODE, payload: { id: "", name: "" } });
  });

  const structureTabPanel = useMemo(
    () => (
      <div className={styles.structure}>
        {state.cld.children.map(item => (
          <div
            key={item.id}
            className={cs(styles.item, state.selectedNode.id === item.id && styles.active)}
          >
            <div className={cs(styles.title, "a-text-ellipsis")} onClick={() => onSelectNode(item)}>
              <div className="a-text-ellipsis">{item.id}</div>
            </div>
            <div className={styles.op} onClick={() => onDeleteNode(item)}>
              <IconClose />
            </div>
          </div>
        ))}
      </div>
    ),
    [onDeleteNode, onSelectNode, state.cld.children, state.selectedNode.id]
  );

  if (props.mobile) {
    return <div className={cs(props.className, styles.container)}>{templateTabPanel}</div>;
  }

  return (
    <div className={cs(props.className, styles.container)}>
      <Tabs destroyOnHide>
        <TabPane key="template" title="模版">
          {templateTabPanel}
        </TabPane>
        <TabPane key="structure" title="结构">
          {structureTabPanel}
        </TabPane>
      </Tabs>
    </div>
  );
};
