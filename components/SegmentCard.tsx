import ImageComponent from "./ImageComponent";
import moment from "moment";

const SegmentCard = (props: any) => {
  const { data } = props;
  return (
    <div className="report-segment">
      <div className="segment-header">
        <span className="top-segment">
          <i className="la la-bullseye" /> {data.time}
        </span>
      </div>

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
