import ImageComponent from "./ImageComponent";
import moment from "moment";
import Widget from "./Widget";

const SegmentCard = (props: any) => {
  const { data } = props;
  return (
    <div className="report-segment">
      <div className="segment-header">
        <span className="top-segment">
          <i className="la la-bullseye" />{" "}
          {`${moment(`${data.date} ${data.time}`).format(
            "MMM. D YYYY | h:mm:ss A"
          )}`}
        </span>
      </div>

      {data.type === "event" && (
        <Widget
          value={data.local_name}
          title={`${data.event_type_jma} ${data.local_name} (${data.international_name})`}
          icon={"la la-bolt"}
          subtitle={"Major Weather Event"}
          mode="danger"
        />
      )}

      <ImageComponent
        src={data.img_colored}
        mode={"COLORED"}
        date={data.date}
      />

      {data.type === "event" && (
        <div className="event-data">
          <li>
            <span>Category (JMA Scale):</span> {data.event_type_jma}
          </li>
          <li>
            <span>Category (SSHWS):</span> {data.event_type_sshws}
          </li>
          <li>
            <span>Date Formed:</span>{" "}
            {moment(data.date_formed).format("MMM. D YYYY")}
          </li>
          <li>
            <span>Date Dissipated:</span>{" "}
            {moment(data.date_dissipated).format("MMM. D YYYY")}
          </li>
          <li>
            <span>Highest winds:</span> {data.highest_winds}
          </li>
          <li>
            <span>Lowest Pressure:</span> {data.lowest_pressure}
          </li>
          <li>
            <span>Fatalities:</span> {data.fatalities}
          </li>
          <li>
            <span>Damage:</span> {data.damage}
          </li>
          <li>
            <span>Affected Areas:</span> {data.areas_affected}
          </li>
        </div>
      )}

      <ImageComponent src={data.img_ir} mode={"INFRARED"} date={data.date} />
      <ImageComponent src={data.img_vis} mode={"VISUAL"} date={data.date} />

      <div className="segment-header">
        <span>
          {" "}
          {`${moment(`${data.date} ${data.time}`).format(
            "MMM. D YYYY | h:mm:ss A"
          )}`}{" "}
          | END
        </span>
      </div>
    </div>
  );
};

export default SegmentCard;
