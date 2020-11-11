import Image from "next/image";

const ImageComponent = (props: any) => {
  const { src, mode, subtitle } = props;

  const setMainImage = () => {
    let imgSRC = src;
    let mainImage: any = document.getElementById("main-image");
    mainImage.src = imgSRC;
  };

  return (
    <>
      {src && (
        <div className="image-widget card-item">
          <small>
            <i className="la la-cube" />{" "}
            <span className="text-warning">MTSAT {mode}:</span>{" "}
            {subtitle ? subtitle : "HIMAWARI-8"}
          </small>
          <Image src={src} alt="image-component" width="350" height="280" />
          <button onClick={setMainImage}>
            <i className="la la-crosshairs" /> Select
          </button>
        </div>
      )}
    </>
  );
};

export default ImageComponent;
