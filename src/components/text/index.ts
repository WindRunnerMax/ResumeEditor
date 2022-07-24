import { LocalComponent } from "src/types/components-types";
import { RichTextControl } from "./control";
import { RichTextEditor } from "./editor";
import { RichText } from "./main";

export const richText: LocalComponent = {
  name: "rich-text" as const,
  config: {
    layout: {
      x: 0,
      y: 0,
      w: 20,
      h: 10,
      isDraggable: true,
      isResizable: true,
      minW: 4,
      minH: 2,
    },
    observeResize: true,
  },
  module: {
    control: RichTextControl,
    main: RichText,
    editor: RichTextEditor,
  },
};
