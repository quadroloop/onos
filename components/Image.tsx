import Image from "next/image";

const ImageComponent = () => {
  return (
    <div className="image-widget card-item">
      <small>
        <i className="la la-cube" />{" "}
        <span className="text-warning">MTSAT COLORED:</span> HIMAWARI-8
      </small>
      <Image
        src="/dataset/cl-a18d633c-3f56-491f-9f8f-26c034b3d2fa-2020-11-11-06:42:52.094392.gif"
        alt="image-component"
        width="350"
        height="350"
      />
      <button>
        <i className="la la-crosshairs" /> Select
      </button>
    </div>
  );
};

export default ImageComponent;
