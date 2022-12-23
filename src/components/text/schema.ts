import { DIVIDING_LINE_KEY, SlateSchema, IMAGE_KEY } from "doc-editor-light";

export const schema: SlateSchema = {
  [IMAGE_KEY]: {
    isVoid: true,
  },
  [DIVIDING_LINE_KEY]: {
    isVoid: true,
  },
};
