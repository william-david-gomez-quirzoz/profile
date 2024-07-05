import { createContext, Dispatch, useContext } from "react";

export const TabContextApp = createContext<{
    setTab: Dispatch<unknown>
    tab: unknown
}>(Object({}))

export const useTabContext = () => useContext(TabContextApp)