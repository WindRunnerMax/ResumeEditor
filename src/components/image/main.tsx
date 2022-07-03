import "./index.scss";
import { FC } from "react";
import { LocalComponentConfig } from "src/types/components-types";
import { Image as ArcoImage, ImageProps } from "@arco-design/web-react";
import { classes } from "src/utils/common/utils";

const Image: FC<{
  className?: string;
  instance: LocalComponentConfig;
}> = props => {
  return (
    <div className={classes("pedestal-main-image", props.className)}>
      <ArcoImage
        className="pedestal-main-image"
        {...props.instance}
        style={props.instance.style}
      ></ArcoImage>
    </div>
  );
};

Image.defaultProps = {
  className: "",
};

export default Image;
