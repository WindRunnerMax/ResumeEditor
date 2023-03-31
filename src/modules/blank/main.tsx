import "./index.scss";
import { FC } from "react";
import { LocalComponentConfig } from "src/types/components";
import { classes } from "src/utils/common/style";

export const BlankMain: FC<{
  className?: string;
  instance: LocalComponentConfig;
}> = props => {
  return (
    <div
      className={classes("pedestal-main-image", props.className)}
      style={props.instance.style}
    ></div>
  );
};
