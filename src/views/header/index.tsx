import { cs } from "src/utils/common/style";
import { Left } from "./components/left";
import styles from "./index.module.scss";
import { FC } from "react";
import { Right } from "./components/right";

export const Header: FC<{
  exportPDF: () => void;
}> = props => {
  return (
    <div className={cs(styles.container, "header-container")}>
      <Left />
      <Right exportPDF={props.exportPDF}></Right>
    </div>
  );
};
