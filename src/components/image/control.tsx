import "./index.scss";
import { ControlPanelFC } from "src/types/components-types";
import { IconImage } from "@arco-design/web-react/icon";
import { getLocalComponentConfigClone } from "src/utils/components-utils";
import { image } from ".";

export const ImageControl: ControlPanelFC = props => {
  return (
    <div onClick={() => props.addSection(getLocalComponentConfigClone(image))}>
      <IconImage />
    </div>
  );
};

ImageControl.defaultProps = {};
