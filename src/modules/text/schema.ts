import { EditorSchema } from "doc-editor-core";
import { DIVIDING_LINE_KEY, IMAGE_KEY } from "doc-editor-plugin";

export const schema: EditorSchema = {
  [IMAGE_KEY]: {
    void: true,
  },
  [DIVIDING_LINE_KEY]: {
    void: true,
  },
};
