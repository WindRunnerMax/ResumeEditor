import styles from "./index.module.scss";
import React, { FC, useEffect, useRef } from "react";
import Editor, { JSONEditorOptions } from "jsoneditor";
import "jsoneditor/dist/jsoneditor.css";
import storage from "src/utils/common/storage";
import { CLD_STORAGE_KEY } from "src/store/reducer";
import { IconSave } from "@arco-design/web-react/icon";
import { Message } from "@arco-design/web-react";
import { isEmptyValue } from "src/utils/common/is";

export const JSONEditor: FC = () => {
  const editor = useRef<HTMLDivElement | null>(null);
  const instance = useRef<Editor | null>(null);

  useEffect(() => {
    if (!editor.current) return;
    const options: JSONEditorOptions = {
      mode: "code",
      modes: ["code", "tree", "form", "text", "view"],
    };
    const jsonEditor = instance.current || new Editor(editor.current, options);
    instance.current = jsonEditor;
    jsonEditor.set(storage("l").get(CLD_STORAGE_KEY));
    return () => {
      jsonEditor.destroy();
    };
  }, []);

  const saveDSL = () => {
    const text = instance.current?.getText();
    if (!isEmptyValue(text)) {
      try {
        if (text === "") {
          storage("l").remove(CLD_STORAGE_KEY);
          Message.success("缓存清理成功");
          return void 0;
        }
        const json = JSON.parse(text);
        storage("l").set(CLD_STORAGE_KEY, json);
        Message.success("保存成功");
      } catch (error) {
        console.error(error);
        Message.error("保存失败");
      }
    }
  };

  return (
    <div>
      <div className={styles.editorContainer} ref={editor} />
      <div className={styles.saveIcon} onClick={saveDSL}>
        <IconSave />
      </div>
    </div>
  );
};

export default JSONEditor;
