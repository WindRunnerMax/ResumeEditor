import "./App.css";
import Debug from "./components/debug";
import { ControlPanel } from "./views/control-panel";
import { EditorPanel } from "./views/editor-panel";
import { MainPanel } from "./views/main-panel";
import { AppProvider } from "./store/context";
import "./styles/asse-style.scss";

export default () => (
  <div className="resume-editor">
    <AppProvider>
      <Debug></Debug>
      <div className="operate-panel">
        <div className="fixed-panel">
          <ControlPanel className="control-panel"></ControlPanel>
          <EditorPanel className="editor-panel"></EditorPanel>
        </div>
      </div>
      <MainPanel
        className="main-panel"
        rowHeight={8}
        cols={60}
        minHeight="100%"
        allowOverlap={false}
      ></MainPanel>
    </AppProvider>
  </div>
);
