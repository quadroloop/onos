import { useState } from "react";
import Clock from "./Clock";
import FilterSettings from "./FilterSettings";
import Image from "./Image";
import ItemList from "./ItemList";
import Widget from "./Widget";

const InfoBar = () => {
  const Tabs = ["overview", "records", "settings"];
  const [activeTab, setActiveTab] = useState<string>("overview");
  return (
    <>
      <div className="info-bar">
        <div className="info-nav">
          {Tabs.map((tab: any) => {
            return (
              <span
                className={`${tab === activeTab ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(tab);
                }}
              >
                {tab}
              </span>
            );
          })}
        </div>
        <div className="content-body">
          {activeTab === "overview" && (
            <>
              <Clock />
              <Image />
              <Image />
              <ItemList />
            </>
          )}

          {activeTab === "records" && (
            <>
              <Widget />
              <ItemList />
            </>
          )}

          {activeTab === "settings" && (
            <>
              <FilterSettings />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default InfoBar;
