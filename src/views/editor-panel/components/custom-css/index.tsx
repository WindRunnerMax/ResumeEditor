import { useEffect, useRef } from "react";
import { Form, FormInstance, Input } from "@arco-design/web-react";
import { EditorPanelFC, LocalComponentConfig } from "src/types/components";
import { findOneInNodeTree } from "src/utils/node-tree-utils";
import { actions } from "src/store/actions";
import { useMemoizedFn } from "ahooks";
import { debounce } from "lodash";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import css2json from "css2json";

type CSSArea = {
  style: string;
};
export const CustomCSS: EditorPanelFC = props => {
  const formRef = useRef<FormInstance>(null);
  const { state, dispatch } = props;
  const id = state.selectedNode.id;
  const style = (findOneInNodeTree(state.cld.children, id) as LocalComponentConfig).style;

  const onChange = useMemoizedFn(
    debounce((_: Partial<CSSArea>, vs: Partial<CSSArea>) => {
      if (vs.style) {
        let css: Record<string, string> = {};
        try {
          css = css2json(vs.style)[""];
          if (!css) return void 0;
          css = Object.keys(css)
            .map(key => [key.replace(/-(\w)/g, (_, letter) => letter.toUpperCase()), css[key]])
            .reduce((res, [key, value]) => {
              res[key] = value;
              return res;
            }, {} as Record<string, string>);
        } catch (e) {
          console.warn("parse css error", e);
        }
        Object.keys.length > 0 &&
          dispatch({
            type: actions.UPDATE_ONE,
            payload: { id, key: "style", data: css, merge: false },
          });
      }
    }, 300)
  );

  useEffect(() => {
    const styles = Object.entries(style).map(([key, value]) => `    ${key}: ${value};`);
    formRef.current && formRef.current.resetFields();
    formRef.current && formRef.current.setFieldsValue({ style: `{\n${styles.join("\n")}\n}` });
  }, [style]);

  return (
    <Form ref={formRef} layout="vertical" size="mini" onChange={onChange}>
      <Form.Item label="样式" field="style">
        <Input.TextArea autoSize />
      </Form.Item>
    </Form>
  );
};
