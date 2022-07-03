import "./index.scss";
import { useEffect, useRef } from "react";
import { Form, FormInstance, ImageProps, Input, Upload } from "@arco-design/web-react";
import { IconArrowUp } from "@arco-design/web-react/icon";
import { UploadProps } from "@arco-design/web-react/es/Upload";
import { EditorPanelFC, LocalComponentConfig } from "src/types/components-types";
import { findOneInNodeTree } from "src/utils/node-tree-utils";
import { actions } from "src/store/actions";
import { useMemoizedFn } from "ahooks";
import { debounce } from "lodash";

const ImageEditor: EditorPanelFC = props => {
  const formRef = useRef<FormInstance>(null);
  const { state, dispatch } = props;
  const id = state.selectedNode.id;
  const imageProps = (findOneInNodeTree(state.cld.children, id) as LocalComponentConfig)
    .props as Partial<ImageProps>;

  const onChange = useMemoizedFn(
    debounce((values: Record<string, unknown>) => {
      dispatch({
        type: actions.UPDATE_ONE,
        payload: { id, key: "props", data: values },
      });
    }, 300)
  );

  useEffect(() => {
    formRef.current && formRef.current.resetFields();
    formRef.current && formRef.current.setFieldsValue(imageProps);
  }, [imageProps]);

  const changeProps = (_: Partial<ImageProps>, vs: Partial<ImageProps>) => {
    onChange(vs);
  };

  const beforeUpload: UploadProps["beforeUpload"] = file => {
    return new Promise(resolve => {
      // 需要自行实现上传逻辑
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        onChange({ src: reader.result });
        formRef.current && formRef.current.setFieldsValue({ src: reader.result });
      };
      resolve(false);
    });
  };

  return (
    <div>
      <div className="a-capitalize pedestal-editor-title">{props.name}组件</div>
      <Form ref={formRef} layout="vertical" size="mini" onChange={changeProps}>
        <Form.Item label="src" field="src">
          <Input
            addAfter={
              <Upload
                className="image-editor-upload"
                accept="image/jpeg, image/png"
                action={"xxx/url"}
                beforeUpload={beforeUpload}
                onChange={() => void 0}
                showUploadList={false}
                withCredentials={true}
              >
                <IconArrowUp />
              </Upload>
            }
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ImageEditor;
