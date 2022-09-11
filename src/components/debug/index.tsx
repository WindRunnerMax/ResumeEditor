import { useContext, useEffect } from "react";
import { useUpdateEffect } from "src/hooks/useUpdateEffect";
import { actions } from "src/store/actions";
import { AppContext } from "src/store/context";
import { CLD, CLD_STORAGE_KEY } from "src/store/reducer";
import storage from "src/utils/common/storage";
import { debounce } from "lodash";

const delay = debounce((fn: () => void) => fn(), 500);

const Debug: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const storageCLD = storage("l").get<CLD>(CLD_STORAGE_KEY);
    console.log("load cld from storage", storageCLD);
    if (storageCLD) {
      dispatch({
        type: actions.INIT_STATE,
        payload: storageCLD,
      });
    }
  }, [dispatch]);

  useUpdateEffect(() => {
    delay(() => {
      console.log("cld changed -> storage cld", state.cld);
      storage("l").set(CLD_STORAGE_KEY, state.cld);
    });
  }, [state.cld]);

  useEffect(() => {
    console.log("select node changed", state.selectedNode);
  }, [state.selectedNode]);

  return <></>;
};

export default Debug;
