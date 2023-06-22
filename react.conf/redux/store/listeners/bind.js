import bindWindowListeners from "./listener/window";
import bindHistoryListener from "./listener/history";
import bindOtherListeners from "../../../../app/listeners/store";
export default store => {
  bindHistoryListener(store);
  bindWindowListeners(store);
  bindOtherListeners(store);
};
