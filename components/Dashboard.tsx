import { MapInteractionCSS } from "react-map-interaction";
import "../styles/dashboard.scss";
import InfoBar from "./InfoBar";
import Layout from "./layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard-page">
        <div className="onos-sidebar">
          <img src={"/images/onos.svg"} className="onos-logo" />

          <div className="sidebar-nav">
            <i className="la la-map active" />
            <i className="la la-sliders" />
            <i className="la la-line-chart" />
            <a href="https://github.com/quadroloop/onos" target="_blank">
              <i className="la la-github" />
            </a>
          </div>
        </div>

        <InfoBar />

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
    </Layout>
  );
};

export default Dashboard;
