import { useState } from "react";
import FilterSettings from "./FilterSettings";
import ItemList from "./ItemList";
import Overview from "./Overview";
import Records from "./Records";

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
                id={tab}
              >
                {tab}
              </span>
            );
          })}
        </div>
        <div className="content-body">
          {activeTab === "overview" && <Overview />}

          {activeTab === "records" && (
            <>
              <Records />
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
