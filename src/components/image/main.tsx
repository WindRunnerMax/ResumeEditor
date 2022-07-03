import "./index.scss";
import { FC } from "react";
import { LocalComponentConfig } from "src/types/components-types";
import { Image as ArcoImage } from "@arco-design/web-react";
import { classes } from "src/utils/common/utils";

const Image: FC<{
  className?: string;
  instance: LocalComponentConfig;
}> = props => {
  return (
    <div id={props.instance.id} className={classes("pedestal-image", props.className)}>
      <ArcoImage
        className="pedestal-image"
        {...props.instance.props}
        style={props.instance.style}
      ></ArcoImage>
    </div>
  );
};

Image.defaultProps = {
  className: "",
};

export default Image;
