import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";

import { useEffect, useState } from "react";

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
      document.getElementById("image_canvas")
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
      <div className="analysis-component" style={{ display: "none" }}>
        Analysis
        <br />
        <button onClick={predict}>Predict</button>
        <br />
        <br />
      </div>
    </>
  );
};

export default Analysis;
