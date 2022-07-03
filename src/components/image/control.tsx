import "./index.scss";
import { ControlPanelFC } from "src/types/components-types";
import { IconImage } from "@arco-design/web-react/icon";
import { getLocalComponentConfigClone } from "src/utils/components-utils";
import { image } from ".";

export const ImageControl: ControlPanelFC = {
  icon: <IconImage />,
  name: "图片",
  getConfig: () => getLocalComponentConfigClone(image),
};
