import "./index.scss";
import { useContext, useMemo, useState } from "react";
import { actions } from "src/store/actions";
import { AppContext } from "src/store/context";
import { useMemoizedFn } from "ahooks";
import React from "react";
import { templateConfig, templateLoader } from "src/utils/loader/template-loader";
import { Message, Modal } from "@arco-design/web-react";
import { CLD } from "src/store/reducer";

export const ControlPanel: React.FC<{ className: string }> = props => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AppContext);

  const loadTemplateConfig = useMemoizedFn((src: string) => {
    Modal.confirm({
      title: "警告",
      content: <div className="a-text-center">确定要加载模版吗，当前的数据将会被覆盖。</div>,
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

  const templateControl = useMemo(
    () => (
      <React.Fragment>
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
      </React.Fragment>
    ),
    [loadTemplateConfig]
  );

  return (
    <div className={props.className}>
      <div className="view-control-panel">{templateControl}</div>
    </div>
  );
};
