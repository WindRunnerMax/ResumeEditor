import "./index.scss";
import { ControlPanelFC } from "src/types/components";
import { IconSubscribe } from "@arco-design/web-react/icon";
import { getLocalComponentConfigClone } from "src/utils/components-utils";
import { blank } from ".";

export const BlankControl: ControlPanelFC = {
  icon: <IconSubscribe />,
  name: "空白",
  getConfig: () => getLocalComponentConfigClone(blank),
};
