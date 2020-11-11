import Image from "./Image";

const SegmentCard = () => {
  return (
    <div className="report-segment">
      <div className="segment-header">
        <span className="top-segment">
          <i className="la la-bullseye" /> 11:30 AM
        </span>
      </div>

      <Image />
      <Image />
      <Image />

      <div className="segment-header">
        <span>11:30 AM | End of Segment</span>
      </div>
    </div>
  );
};

export default SegmentCard;
