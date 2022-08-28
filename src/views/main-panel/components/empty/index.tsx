import styles from "./index.module.scss";
import { FC } from "react";
import { Empty as ArcoEmpty } from "@arco-design/web-react";
export const Empty: FC = () => {
  return (
    <div className={styles.fullPage}>
      <ArcoEmpty description="空空如也"></ArcoEmpty>
    </div>
  );
};
