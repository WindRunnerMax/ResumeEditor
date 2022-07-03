import "./index.scss";
import { FC } from "react";
import { LocalComponentConfig } from "src/types/components-types";
import { classes } from "src/utils/common/utils";

export const BlankMain: FC<{
  className?: string;
  instance: LocalComponentConfig;
}> = props => {
  return (
    <div id={props.instance.id} className={classes("pedestal-main-image", props.className)}></div>
  );
};
