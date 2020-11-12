import ItemList from "./ItemList";
import axios from "axios";
import { useEffect, useState } from "react";

const Records = () => {
  const [recordsData, setData] = useState<any>(null);

  useEffect(() => {
    axios.get("/api/records").then((res: any) => {
      let data = res.data.results.reverse();
      setData(data);
    });
  }, []);
  return (
    <>
      <p className="text-header">
        <i className="la la-list" /> RECORDS
        <br />
        <small>
          List of weather data snapshot and documented major weather events,
          group by date.
        </small>
      </p>
      <ItemList data={recordsData} mode="overview" />
    </>
  );
};

export default Records;
