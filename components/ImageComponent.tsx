import { setImageInfo } from "./globals";

const ImageComponent = (props: any) => {
  const { src, mode, subtitle, date } = props;

  const setMainImage = (id: string) => {
    let imgSRC = src;
    let activeImage: any = document.querySelectorAll(".active-image");
    let currentImage = document.getElementById(id);

    if (activeImage.length > 0) {
      activeImage[0].classList.remove("active-image");
      currentImage.classList.add("active-image");
    } else {
      currentImage.classList.add("active-image");
    }
    let mainImage: any = document.getElementById("main-image");
    setImageInfo(mode, date);

    mainImage.src = imgSRC;
  };

  let imageId = src.split("/").pop();

  return (
    <>
      {src && (
        <div className="image-widget card-item" id={imageId}>
          <small>
            <i className="la la-cube" />{" "}
            <span className="text-warning">MTSAT {mode}:</span>{" "}
            {subtitle ? subtitle : "HIMAWARI-8"}
          </small>
          <img
            src={src}
            alt="image-component"
            className="image-item"
            width="350"
            height="280"
          />
          <button
            onClick={() => {
              setMainImage(imageId);
            }}
          >
            <i className="la la-crosshairs" /> Select
          </button>
        </div>
      )}
    </>
  );
};

export default ImageComponent;
