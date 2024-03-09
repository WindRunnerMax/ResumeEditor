import "./App.css";
import "./styles/asse-style.scss";
import Debug from "./components/debug";
import { ControlPanel } from "./views/control-panel";
import { EditorPanel } from "./views/editor-panel";
import { MainPanel } from "./views/main-panel";
import { AppProvider } from "./store/context";
import { useState } from "react";
import { isMobile } from "./utils/common/is";
import { useUpdateEffect } from "./hooks/useUpdateEffect";
import { LazyLoad } from "./components/lazy-load";
import { lazy } from "react";

const JSONEditor = lazy(() => import("./views/json-editor"));
const ResumePreview = lazy(() => import("./views/preview"));
const MobilePreview = lazy(() => import("./views/mobile-preview"));

const urlParams = new URL(location.href).searchParams;
const isPreview = urlParams.get("preview") !== null;
const isJSON = urlParams.get("json") !== null;

export default () => {
  const [isRender, setIsRender] = useState(false);

  useUpdateEffect(() => {
    if (isRender) {
      window.print();
      setIsRender(false);
    }
  }, [isRender]);

  const exportPDF = () => {
    setIsRender(true);
  };

  if (isMobile()) return <LazyLoad component={<MobilePreview></MobilePreview>}></LazyLoad>;
  if (isPreview) return <LazyLoad component={<ResumePreview></ResumePreview>}></LazyLoad>;
  if (isJSON) return <LazyLoad component={<JSONEditor></JSONEditor>}></LazyLoad>;

  return (
    <div className="resume-editor">
      <AppProvider mode={isRender ? "render" : "editor"}>
        <Debug></Debug>
        <ControlPanel className="control-panel"></ControlPanel>
        <MainPanel
          className="main-panel"
          rowHeight={8}
          cols={60}
          minHeight="296mm"
          allowOverlap={true}
        ></MainPanel>
        <EditorPanel className="editor-panel" exportPDF={exportPDF}></EditorPanel>
      </AppProvider>
    </div>
  );
};
