import Clock from "./Clock";
import ItemList from "./ItemList";
import axios from "axios";
import { useEffect, useState } from "react";
import { gotoRecords } from "./globals";

const Overview = () => {
  const [overviewData, setData] = useState<any>(null);

  useEffect(() => {
    axios.get("/api/records").then((res: any) => {
      let data = res.data.results.reverse().slice(0, 4);
      setData(data);
    });
  }, []);
  return (
    <>
      <Clock />
      <ItemList data={overviewData} mode="overview" />
      <button
        className="save-btn"
        onClick={() => {
          gotoRecords();
        }}
      >
        View More
      </button>
    </>
  );
};

export default Overview;
