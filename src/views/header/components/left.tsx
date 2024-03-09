import { useMemoizedFn } from "ahooks";
import type { FC } from "react";
import React, { useContext, useMemo } from "react";
import styles from "../index.module.scss";
import { components } from "src/utils/loader/components-loader";
import { AppContext } from "src/store/context";
import { LocalComponentConfig } from "src/types/components";
import { findIndexInSections } from "src/utils/iterator/node-tree-utils";
import { isEmptyValue } from "src/utils/common/is";
import { actions } from "src/store/actions";
import { cs } from "src/utils/common/style";

export const Left: FC<{
  className?: string;
}> = () => {
  const { state, dispatch } = useContext(AppContext);

  const controls = useMemo(() => components.map(item => item.module.control), []);

  const addSection = useMemoizedFn((cld: LocalComponentConfig) => {
    if (state.selectedNode.id) {
      const index = findIndexInSections(state.cld.children, state.selectedNode.id);
      if (!isEmptyValue(index)) {
        dispatch({ type: actions.ADD_SECTION, payload: { config: cld, index } });
      }
    } else {
      dispatch({ type: actions.ADD_SECTION, payload: { config: cld } });
    }
    dispatch({ type: actions.SELECT_NODE, payload: { id: cld.id, name: cld.name } });
  });

  return (
    <div className={styles.opGroup}>
      {controls.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className={cs(styles.op)}
            onClick={() => addSection(item.getConfig())}
            onMouseDown={e => e.stopPropagation()}
          >
            {item.icon}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
