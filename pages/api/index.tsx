export default (req, res) => {
  res.status(200).json({
    message: "Onos API v1 is located in /api/v1",
  });
};