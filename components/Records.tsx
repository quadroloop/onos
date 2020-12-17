import ItemList from "./ItemList";
import axios from "axios";
import { useEffect, useState } from "react";
import Widget from "./Widget";
import moment from "moment";

const Records = () => {
  const [recordsData, setData] = useState<any>(null);
  const [apiInfo, setAPIInfo] = useState<any>(null);

  useEffect(() => {
    axios.get("/api/records/all").then((res: any) => {
      let data = res.data.results.reverse();
      setData(data);
    });

    axios.get("/api").then((res: any) => {
      let data = res.data.info;
      setAPIInfo(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <p className="text-header">
        <i className="la la-list" /> RECORDS
        <br />
        <small>
          List of weather data snapshot and documented major weather events,
          grouped by date.
        </small>
      </p>
      <Widget
        value={apiInfo && moment(apiInfo.last_updated).fromNow()}
        icon={"la-project-diagram"}
        title={"LAST DATASET UPDATE"}
        subtitle={
          apiInfo && moment(apiInfo.last_updated).format("MMMM D, YYYY")
        }
      />
      <ItemList data={recordsData} mode="overview" />
    </>
  );
};

export default Records;
