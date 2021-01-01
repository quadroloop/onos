import Clock from "./Clock";
import ItemList from "./ItemList";
import axios from "axios";
import { useEffect, useState } from "react";
import { gotoRecords } from "./globals";

const Overview = () => {
  const [overviewData, setData] = useState<any>(null);
  const [recentEvent, setrecentEvent] = useState<any>(null);

  useEffect(() => {
    axios.get("/api/records/all").then((res: any) => {
      let data = res.data.results.reverse().slice(0, 4);
      setData(data);
    });

    axios.get("/api/records/major_events").then((res: any) => {
      let data = res.data.results[0];
      let recentEvent = [{ date: data.date, data: [data] }];
      setrecentEvent(recentEvent);
    });
  }, []);
  return (
    <>
      <Clock />
      <span className="text-header">
        <i className="la la-list" /> Recent Major Event
        <br />
        <small>Most resent major weather event.</small>
      </span>
      <ItemList data={recentEvent} />
      <span className="text-header">
        <i className="la la-list" /> Recent Entries
        <br />
        <small>List of the most recent records.</small>
      </span>
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
