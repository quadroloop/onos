import moment from "moment-timezone";
import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState<any>("");

  const updateTime = () => {
    let time = moment().tz("Asia/Philippines").format("hh:mm:ss A");
    setDate(time);
  };

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);

  return (
    <div className="card-item time-widget">
      <span>{date}</span>
      <small className="text-uppercase">
        {moment().tz("Asia/Philippines").format("MMMM D, YYYY")}
      </small>
      <small>Philippine Standard Time</small>
    </div>
  );
};

export default Clock;
