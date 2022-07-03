import { useContext, useEffect } from "react";
import { useUpdateEffect } from "src/hooks/useUpdateEffect";
import { actions } from "src/store/actions";
import { AppContext } from "src/store/context";
import { CLD } from "src/store/reducer";
import storage from "src/utils/common/storage";
import { debounce } from "lodash";
import { example } from "./example";

const delay = debounce((fn: () => void) => fn(), 500);

const Debug: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const storageCLD = storage("l").get<CLD>("cld");
    console.log("load cld from storage", storageCLD);
    dispatch({
      type: actions.INIT_STATE,
      payload: storageCLD || example,
    });
  }, [dispatch]);

  useUpdateEffect(() => {
    delay(() => {
      console.log("cld changed -> storage cld", state.cld);
      storage("l").set("cld", state.cld);
    });
  }, [state.cld]);

  useEffect(() => {
    console.log("select node changed", state.selectedNode);
  }, [state.selectedNode]);

  return <></>;
};

export default Debug;
