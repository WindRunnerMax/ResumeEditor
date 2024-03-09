import "./index.scss";
import { FC, useEffect } from "react";
import { ControlPanel } from "../control-panel";
import MainPanel from "../main-panel";
import { AppProvider } from "src/store/context";
import { Message } from "@arco-design/web-react";

export const MobilePreview: FC = () => {
  useEffect(() => {
    Message.info("移动端仅提供模版预览功能，不支持编辑");
  }, []);

  return (
    <div className="mobile-resume-editor">
      <AppProvider mode={"render"}>
        <MainPanel
          className="mobile-main-panel"
          rowHeight={8}
          cols={60}
          minHeight="296mm"
          allowOverlap={false}
        ></MainPanel>
        <ControlPanel className="mobile-control-panel" mobile></ControlPanel>
      </AppProvider>
    </div>
  );
};

export default MobilePreview;
