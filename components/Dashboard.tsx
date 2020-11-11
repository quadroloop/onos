import { useEffect, useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";
import "../styles/dashboard.scss";
import {
  gotoRecords,
  gotoSettings,
  latest_colored,
  resetImage,
} from "./globals";
import InfoBar from "./InfoBar";
import Layout from "./layout";

const Dashboard = () => {
  const [filterStyle, setFilterStyle] = useState<string>();

  useEffect(() => {
    setFilterStyle(localStorage.filterStyle);
  }, []);

  return (
    <Layout>
      <div className="dashboard-page">
        <div className="onos-sidebar">
          <img src={"/images/onos.svg"} className="onos-logo" />

          <div className="sidebar-nav">
            <i className="la la-map active" onClick={resetImage} />
            <i className="la la-sliders" onClick={gotoSettings} />
            <i className="la la-line-chart" onClick={gotoRecords} />
            <a href="https://github.com/quadroloop/onos" target="_blank">
              <i className="la la-github" />
            </a>
          </div>
        </div>

        <InfoBar />

        <div className="map-container">
          <MapInteractionCSS maxScale={100} minScale={1}>
            <img
              src={latest_colored}
              id="main-image"
              style={{
                filter: filterStyle,
              }}
            />
          </MapInteractionCSS>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
