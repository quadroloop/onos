import { useEffect, useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";
import "../styles/dashboard.scss";
import {
  gotoOverview,
  gotoRecords,
  gotoSettings,
  latest_colored,
  resetImage,
  setImageInfo,
} from "./globals";
import InfoBar from "./InfoBar";
import Layout from "./layout";
import nprogress from "nprogress";
import ImageInfo from "./ImageInfo";
import moment from "moment";

// testing tensorflow model
import * as tf from "@tensorflow/tfjs";

const Dashboard = () => {
  const [filterStyle, setFilterStyle] = useState<string>();

  useEffect(() => {
    setFilterStyle(localStorage.filterStyle);
    nprogress.start();

    setTimeout(() => {
      nprogress.done();
    }, 9000);

    async function delta() {
      const model = await tf.loadLayersModel("/neural_engine/model.json");

      let image_data: any = document.getElementById("main-image");

      let nData = tf.browser.fromPixels(image_data);
      const smalImg = tf.image.resizeBilinear(nData, [150, 150]);
      const resized = tf.cast(smalImg, "float32");
      const t4d = tf.tensor4d(Array.from(resized.dataSync()), [1, 150, 150, 3]);

      const prediction = model.predict(t4d) as tf.Tensor;

      console.log("Prediction ==>", prediction.dataSync());
    }

    // document.body.onkeyup = () => {
    //   delta();
    // };
  }, []);

  const viewLatest = () => {
    nprogress.start();
    setImageInfo("LATEST", `${moment().format("MM-DD-YYYY")}`);
    resetImage();
  };

  const imageLoaded = () => {
    nprogress.done();
  };

  const imageError = () => {
    nprogress.done();
    alert("failed to load image");
  };

  useEffect(() => {
    // fetch image data
  }, []);

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
        {/* <CurrentImageModes /> */}

        <div className="map-container">
          <MapInteractionCSS maxScale={100} minScale={1}>
            <div className="main-image-wrapper">
              <img
                src={latest_colored}
                id="main-image"
                style={{
                  filter: filterStyle,
                }}
                onLoad={() => {
                  imageLoaded();
                }}
                onError={imageError}
                // crossOrigin="anonymous"
              />
            </div>
          </MapInteractionCSS>
          {/* <canvas id="image_canvas" /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
