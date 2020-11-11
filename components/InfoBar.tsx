import Clock from "./Clock";
import FilterSettings from "./FilterSettings";
import Image from "./Image";
import ItemList from "./ItemList";
import Widget from "./Widget";

const InfoBar = () => {
  return (
    <>
      <div className="info-bar">
        <div className="info-nav">
          <span className="active">Overview</span>
          <span>Records</span>
          <span>Settings</span>
        </div>
        <div className="content-body">
          <Clock />
          <Image />
          <FilterSettings />
          <Image />
          <ItemList />
          <Widget />
        </div>
      </div>
    </>
  );
};

export default InfoBar;
