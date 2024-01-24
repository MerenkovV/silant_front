import { useContext, createContext } from "react";
import UserStore from "./Users";

export default class RootStore {
    users = new UserStore()
}

export const Context = createContext<RootStore | null>(null)

export const useStore = () => {
    const context = useContext(Context);
    if (context === null) {
      throw new Error(
        "You have forgotten to wrap your root component with RootStoreProvider"
      );
    }
    return context;
}