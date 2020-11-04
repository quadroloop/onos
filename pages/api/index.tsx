import dataset from "../../public/dataset/dataset.json";
import dataset_info from "../../public/dataset/dataset_info.json";

export default (req, res) => {
  res.status(200).json({
    message: "Onos API v1",
    info: dataset_info,
    dataset: dataset,
  });
};
