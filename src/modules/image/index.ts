import { LocalComponent } from "src/types/components";
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
