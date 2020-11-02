import { MapInteractionCSS } from "react-map-interaction";
import "../styles/dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="onos-sidebar">
        <img src={"/images/onos.svg"} className="onos-logo" />
      </div>
      <div className="info-bar">
        <h1>Hello</h1>
      </div>
      <div className="map-container">
        <MapInteractionCSS maxScale={100} minScale={1}>
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
