import SkeletonRow from "./SkeletonRow";

const Widget = (props: any) => {
  const { icon, value, title, subtitle } = props;

  return (
    <div className="card-item card-widget">
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
