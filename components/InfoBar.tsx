import Clock from "./Clock";

const InfoBar = () => {
  return (
    <>
      <div className="info-bar">
        <div className="info-nav">
          <span className="active">Overview</span>
          <span>Menu</span>
          <span>Settings</span>
        </div>

        <Clock />
      </div>
    </>
  );
};

export default InfoBar;
