import { useEffect, useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";
import "../styles/dashboard.scss";
import {
  gotoOverview,
  gotoRecords,
  gotoSettings,
  latest_colored,
  resetImage,
} from "./globals";
import InfoBar from "./InfoBar";
import Layout from "./layout";
import nprogress from "nprogress";
import ImageInfo from "./ImageInfo";

const Dashboard = () => {
  const [filterStyle, setFilterStyle] = useState<string>();

  useEffect(() => {
    setFilterStyle(localStorage.filterStyle);
    nprogress.start();

    setTimeout(() => {
      nprogress.done();
    }, 10000);
  }, []);

  const viewLatest = () => {
    nprogress.start();
    resetImage();
  };

  const imageLoaded = () => {
    nprogress.done();
  };

  const imageError = () => {
    nprogress.done();
    alert("failed to load image");
  };

  return (
    <Layout>
      <div className="dashboard-page">
        <div className="onos-sidebar">
          <img src={"/images/onos.svg"} className="onos-logo" />

          <div className="sidebar-nav">
            <i className="la la-map" onClick={viewLatest} />
            <i className="la la-list" onClick={gotoOverview} />
            <i className="la la-line-chart" onClick={gotoRecords} />
            <i className="la la-sliders" onClick={gotoSettings} />
            <a href="https://github.com/quadroloop/onos" target="_blank">
              <i className="la la-github" />
            </a>
          </div>
        </div>

        <InfoBar />
        <ImageInfo />

        <div className="map-container">
          <MapInteractionCSS maxScale={100} minScale={1}>
            <img
              src={latest_colored}
              id="main-image"
              style={{
                filter: filterStyle,
              }}
              onLoad={imageLoaded}
              onError={imageError}
            />
          </MapInteractionCSS>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
