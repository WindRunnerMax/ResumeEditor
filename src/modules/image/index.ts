import { Layout } from "react-grid-layout";
import { BaseLocalComponent, LocalComponent } from "src/types/components";
import { ImageControl } from "./control";
import ImageEditor from "./editor";
import ImageMain from "./main";

const IMAGE_KEY = "image" as const;
declare module "resume-editor" {
  interface LocalComponentMap {
    [IMAGE_KEY]: DeepMerge<
      BaseLocalComponent,
      { name: typeof IMAGE_KEY; config: { layout: Layout } }
    >;
  }
}

export const image: LocalComponent = {
  type: "local",
  name: IMAGE_KEY,
  props: {
    src: "./favicon.ico",
  },
  config: {
    layout: {
      i: "",
      x: 0,
      y: 0,
      w: 20,
      h: 20,
      isDraggable: true,
      isResizable: true,
      minW: 2,
      minH: 2,
    },
  },
  module: {
    control: ImageControl,
    main: ImageMain,
    editor: ImageEditor,
  },
};
