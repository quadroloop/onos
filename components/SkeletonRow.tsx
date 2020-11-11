import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonRow = () => {
  return (
    <SkeletonTheme
      color="rgba(255,255,255,0.1)"
      highlightColor="rgba(255,255,255,0.2)"
    >
      <span style={{ opacity: "0.4" }}>
        <Skeleton count={1} />
      </span>
    </SkeletonTheme>
  );
};

export default SkeletonRow;
