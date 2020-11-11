import dataset from "../../../public/dataset/dataset.json";

let dates = [];

dataset.forEach((entry: any) => {
  if (!dates.includes(entry.date)) {
    dates.push(entry.date);
  }
});

let sortedByDate = dates.map((d: any) => ({
  date: d,
  data: [...dataset.filter((e: any) => e.date === d)],
}));

export default (req, res) => {
  res.status(200).json({
    message: "Onos API v1 / Reports",
    results: sortedByDate,
  });
};
