import "./index.scss";
import React, { FC, useEffect, useRef, useState } from "react";
import { useMemoizedFn } from "ahooks";
import { classes } from "src/utils/common/utils";

const ReferenceLine: FC<{
  className?: string;
  rows: number;
  cols: number;
  display: boolean;
  style?: React.CSSProperties;
}> = props => {
  const [cellWidth, setCellWidth] = useState<number>(0);
  const referenceLineRef = useRef<HTMLDivElement>(null);

  const calcCellWidth = useMemoizedFn(() => {
    if (!referenceLineRef.current) return void 0;
    const element = referenceLineRef.current;
    const width = element.getBoundingClientRect().width - 2;
    setCellWidth(width / props.cols);
  });

  useEffect(() => {
    calcCellWidth();
    window.addEventListener("resize", calcCellWidth);
    return () => {
      window.removeEventListener("resize", calcCellWidth);
    };
  }, [calcCellWidth, props.cols]);

  return (
    <div
      className={classes(
        "pedestal-main-reference-line",
        props.className,
        props.display && "enable"
      )}
      style={{
        backgroundSize: `${cellWidth}px ${props.rows}px`,
        backgroundPositionX: cellWidth / 2,
        backgroundPositionY: -props.rows / 2,
        ...props.style,
      }}
      ref={referenceLineRef}
    >
      {props.children}
    </div>
  );
};

ReferenceLine.defaultProps = {
  className: "",
};

export default ReferenceLine;
