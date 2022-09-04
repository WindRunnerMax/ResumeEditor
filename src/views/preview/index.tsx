import { FC } from "react";
import MainPanel from "../main-panel";
import { AppProvider } from "src/store/context";
import LiveUpdate from "./live-update";

export const ResumePreview: FC = () => {
  return (
    <div className="resume-editor">
      <AppProvider mode={"render"}>
        <LiveUpdate></LiveUpdate>
        <MainPanel
          className="main-panel"
          rowHeight={8}
          cols={60}
          minHeight="296mm"
          allowOverlap={false}
        ></MainPanel>
      </AppProvider>
    </div>
  );
};
