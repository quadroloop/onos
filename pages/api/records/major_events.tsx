import dataset from "../../../public/dataset/dataset.json";

export default (req, res) => {
  res.status(200).json({
    message: "Onos API v1 /records/major_events",
    results: dataset.filter((data: any) => data.type === "event").reverse(),
  });
};
