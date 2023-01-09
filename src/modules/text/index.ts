import { Layout } from "react-grid-layout";
import { BaseLocalComponent, LocalComponent } from "src/types/components";
import { RichTextControl } from "./control";
import { RichTextEditor } from "./editor";
import { RichText } from "./main";

const RICH_TEXT_KEY = "rich-text" as const;
declare module "resume-editor" {
  interface LocalComponentMap {
    [RICH_TEXT_KEY]: DeepMerge<
      BaseLocalComponent,
      {
        name: typeof RICH_TEXT_KEY;
        config: { layout: Layout; observeResize: boolean };
      }
    >;
  }
}

export const richText: LocalComponent = {
  type: "local",
  name: "rich-text" as const,
  config: {
    layout: {
      i: "",
      x: 0,
      y: 0,
      w: 20,
      h: 3,
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
