import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";

interface Store {
  activityStore: ActivityStore;
}

export const store: Store = {
  activityStore: new ActivityStore(),
};

//useContext Hook!!!
export const StoreContext = createContext(store);

//custom hooks
export function useStore(){
    return useContext(StoreContext);
}