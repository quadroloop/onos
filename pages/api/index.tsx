import { latest_colored } from "../../components/globals";
import dataset from "../../public/dataset/dataset.json";
import dataset_info from "../../public/dataset/dataset_info.json";
const fs = require("fs");
import wget from "node-wget";

async function download() {
  await wget(
    {
      url: latest_colored,
      dest: "./public/",
    },
    function (err, data) {
      // data: { headers:{...}, filepath:'...' }
      console.log("--- dry run data:");
      console.log(data); // '/tmp/package.json'
    }
  );
}

download();

export default async (req, res) => {
  res.status(200).json({
    message: "Onos API v1",
    info: dataset_info,
    dataset: dataset,
  });
};
