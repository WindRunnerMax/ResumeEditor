import { useMemoizedFn } from "ahooks";
import { useContext, useEffect } from "react";
import { actions } from "src/store/actions";
import { AppContext } from "src/store/context";
import { CLD } from "src/store/reducer";
import storage from "src/utils/common/storage";

const LiveUpdate: React.FC = () => {
  const { dispatch } = useContext(AppContext);

  const loadCLD = useMemoizedFn(() => {
    const storageCLD = storage("l").get<CLD>("cld");
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
