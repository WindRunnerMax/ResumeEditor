import { LocalComponent } from "src/types/components-types";
import { ImageControl } from "./control";
import ImageEditor from "./editor";
import ImageMain from "./main";
export const image: LocalComponent = {
  name: "image" as const,
  props: {
    src: "./favicon.ico",
  },
  config: {
    layout: {
      x: 0,
      y: 0,
      w: 4,
      h: 1,
      isDraggable: true,
      isResizable: true,
      minW: 1,
      minH: 1,
    },
  },
  module: {
    control: ImageControl,
    main: ImageMain,
    editor: ImageEditor,
  },
};
