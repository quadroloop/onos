import Clock from "./Clock";
import Image from "./Image";

const InfoBar = () => {
  return (
    <>
      <div className="info-bar">
        <div className="info-nav">
          <span className="active">Overview</span>
          <span>Menu</span>
          <span>Settings</span>
        </div>
        <div className="content-body">
          <Clock />
          <Image />
          <Image />
        </div>
      </div>
    </>
  );
};

export default InfoBar;
