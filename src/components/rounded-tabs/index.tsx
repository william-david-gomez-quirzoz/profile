"use client";
import { TabContextProps, TabListProps, TabPanelProps, TabProps } from "./types";
import "./styles.css";
import { useState } from "react";
import { TabContextApp, useTabContext } from "./context";
const TabContext = ({ children, value }: TabContextProps) => {
  const [tab, setTab] = useState(value);
  return (
    <TabContextApp.Provider
      value={{
        tab,
        setTab,
      }}
    >
      {children}
    </TabContextApp.Provider>
  );
};

export { TabContext };

TabContext.TabList = ({ children }: TabListProps) => {
  return <div className="tab_list">{children}</div>;
};

TabContext.Tab = ({ children, value }: TabProps) => {
  const { setTab } = useTabContext();
  return (
    <div
      onClick={() => {
        setTab(value);
      }}
      className="tab"
    >
      {children}
    </div>
  );
};
TabContext.TabPanel = ({ children, value, className }: TabPanelProps) => {
  const { tab } = useTabContext();
  return tab == value ? <div className={`tab_panel ${className ?? ''}`}>{children}</div> : null;
};
