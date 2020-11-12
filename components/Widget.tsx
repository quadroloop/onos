import SkeletonRow from "./SkeletonRow";

const Widget = (props: any) => {
  const { icon, value, title, subtitle, mode } = props;

  return (
    <div className={`card-item card-widget ${mode ? mode : ""}`}>
      {icon && <i className={`la ${icon}`} />}
      <div>
        <span>{value ? value : <SkeletonRow />}</span>
        <small>{title ? title : <SkeletonRow />} </small>
        <small>{subtitle ? subtitle : <SkeletonRow />}</small>
      </div>
    </div>
  );
};

export default Widget;
