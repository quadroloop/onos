import { latest_colored } from "../../components/globals";
import dataset from "../../public/dataset/dataset.json";
import dataset_info from "../../public/dataset/dataset_info.json";
import wget from "node-wget";
const path = require("path");

// using wget to fetch the file from src.meteopilipinas.gov
async function downloadSatImage() {
  await wget(
    {
      url:
        "http://src.meteopilipinas.gov.ph/repo/mtsat-colored/24hour/1-him-colored-fs8.png",
      dest: path.resolve("./public/current.gif"),
    },
    function (err, data) {
      console.log("--- dry run data:");
      console.log(data);
    }
  );
}

export default async (req, res) => {
  // await downloadSatImage();
  res.status(200).json({
    message: "Onos API v1",
    info: dataset_info,
    dataset: dataset,
  });
};
