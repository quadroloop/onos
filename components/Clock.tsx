import moment from "moment-timezone";
import { useEffect, useState } from "react";
import SkeletonRow from "./SkeletonRow";

const Clock = () => {
  const [date, setDate] = useState<any>("");

  const updateTime = () => {
    let time = moment().tz("Asia/Manila").format("hh:mm:ss A");
    setDate(time);
  };

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);

  return (
    <div className="card-item time-widget">
      <span>{date ? date : <SkeletonRow />}</span>
      <small className="text-uppercase">
        {moment().tz("Asia/Manila").format("MMMM D, YYYY (dddd)")}
      </small>
      <small>Philippine Standard Time</small>
    </div>
  );
};

export default Clock;
