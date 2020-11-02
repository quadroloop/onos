import { MapInteractionCSS } from "react-map-interaction";
import "../styles/dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="onos-sidebar">
        <img src={"/images/onos.svg"} className="onos-logo" />
      </div>
      <div className="image-container">
        <MapInteractionCSS maxScale={100}>
          <img
            src={
              "https://src.meteopilipinas.gov.ph/repo/mtsat-colored/24hour/latest-him-colored.gif"
            }
          />
        </MapInteractionCSS>
      </div>
    </div>
  );
};

export default Dashboard;
