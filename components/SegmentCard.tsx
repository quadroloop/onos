import ImageComponent from "./ImageComponent";
// import moment from "moment";
import Widget from "./Widget";

const SegmentCard = (props: any) => {
  const { data } = props;
  return (
    <div className="report-segment">
      <div className="segment-header">
        <span className="top-segment">
          <i className="la la-bullseye" /> {data.time}
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

      <ImageComponent src={data.img_colored} mode={"COLORED"} />
      <ImageComponent src={data.img_ir} mode={"INFRARED"} />
      <ImageComponent src={data.img_vis} mode={"VISUAL"} />

      <div className="segment-header">
        <span>{data.time} | End of Segment</span>
      </div>
    </div>
  );
};

export default SegmentCard;
