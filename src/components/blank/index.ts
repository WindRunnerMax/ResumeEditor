import { LocalComponent } from "src/types/components-types";
import { BlankControl } from "./control";
import { BlankEditor } from "./editor";
import { BlankMain } from "./main";
export const blank: LocalComponent = {
  name: "blank" as const,
  config: {
    layout: {
      x: 0,
      y: 0,
      w: 10,
      h: 3,
      isDraggable: true,
      isResizable: true,
      minW: 1,
      minH: 1,
    },
  },
  module: {
    control: BlankControl,
    main: BlankMain,
    editor: BlankEditor,
  },
};
