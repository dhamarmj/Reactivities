import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";

interface Store {
  activityStore: ActivityStore;
  commonStore: CommonStore;
}

export const store: Store = {
  activityStore: new ActivityStore(),
  commonStore: new CommonStore(),
};

//useContext Hook!!!
export const StoreContext = createContext(store);

//custom hooks
export function useStore() {
  return useContext(StoreContext);
}
