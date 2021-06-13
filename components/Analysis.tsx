// import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Analysis = () => {
  const [model, setModel] = useState<any>(null);

  const loadModel = async () => {
    let modelURL = "/neural_engine/onos-model/model.json";
    let metadataURL = "/neural_engine/onos-model/metadata.json";
    let onos_model = await tmImage.load(modelURL, metadataURL);
    setModel(onos_model);
  };

  const predict = async () => {
    const predictions = await model.predict(
      document.getElementById("main-image")
    );
    console.log(predictions);
  };

  useEffect(() => {
    if (!model) {
      loadModel();
    } else {
      console.log("ONOS model Loaded");
    }
  }, [model]);

  return (
    <>
      <div className="analysis-component">
        <span className="item-header">
          <i className="la la-dice-d20" /> ANALYSIS | ML Prediction
        </span>
        <img src="/current.gif" id="current-delta-img" />

        <div className="main-predictions">
          <div className="result top-result">
            <div className="icon-wrapper">
              <i className="la la-bolt" />
            </div>
            <span>NORMAL WEATHER (100%)</span>
          </div>

          <div className="result">
            <div style={{ width: 30, height: 30 }}>
              <CircularProgressbar
                value={66}
                text={`${100}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",

                  textSize: "25px",

                  pathTransitionDuration: 0.5,

                  pathColor: `#3f9dc2`,
                  textColor: "#ffffff",
                  trailColor: "#1a1b1b",
                  backgroundColor: "#156d66",
                })}
              />
            </div>
            <span>LOW PRESSURE AREA (120%)</span>
          </div>

          <div className="result">
            <div style={{ width: 30, height: 30 }}>
              <CircularProgressbar value={66} text={`${0.6 * 100}%`} />
            </div>
            <span>TYPHOON (42%)</span>
          </div>
        </div>
        <button onClick={predict}>Predict</button>
      </div>
    </>
  );
};

export default Analysis;
