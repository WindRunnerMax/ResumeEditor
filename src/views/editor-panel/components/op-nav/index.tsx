import { Link } from "@arco-design/web-react";
import React from "react";
import { FC } from "react";

export const OpNav: FC<{
  exportPDF: () => void;
}> = props => {
  return (
    <React.Fragment>
      <div>
        <Link target="_blank" href="https://github.com/WindrunnerMax/ResumeEditor">
          Github
        </Link>
        <Link
          target="_blank"
          href="https://github.com/WindrunnerMax/ResumeEditor#%E5%AF%BC%E5%87%BApdf"
        >
          使用必读
        </Link>
        <Link target="_blank" href="https://github.com/WindrunnerMax/ResumeEditor/issues/2">
          常见问题
        </Link>
      </div>
      <div>
        <Link href="?preview" target="_blank">
          实时预览
        </Link>
        <Link href="?json" target="_blank">
          JSON编辑
        </Link>
        <Link onClick={props.exportPDF}>导出PDF</Link>
      </div>
    </React.Fragment>
  );
};
