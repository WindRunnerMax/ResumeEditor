import { useMemoizedFn } from "ahooks";
import { useContext, useEffect } from "react";
import { actions } from "src/store/actions";
import { AppContext } from "src/store/context";
import { CLD, CLD_STORAGE_KEY } from "src/store/reducer";
import storage from "src/utils/common/storage";

const LiveUpdate: React.FC = () => {
  const { dispatch } = useContext(AppContext);

  const loadCLD = useMemoizedFn(() => {
    const storageCLD = storage("l").get<CLD>(CLD_STORAGE_KEY);
    console.log("load cld from storage", storageCLD);
    if (storageCLD) {
      dispatch({
        type: actions.INIT_STATE,
        payload: storageCLD,
      });
    }
  });

  useEffect(() => {
    window.addEventListener("storage", loadCLD);
    loadCLD();
  }, [dispatch, loadCLD]);

  return <></>;
};

export default LiveUpdate;
