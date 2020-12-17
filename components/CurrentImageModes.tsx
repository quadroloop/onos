import { img_colored, img_irbig, img_vis, setImageInfo } from "./globals";
import LazyLoad from "react-lazyload";
// import nprogress from "nprogress";
import moment from "moment";

const CurrentImageModes = () => {
  const imageSet = [
    {
      name: "colored",
      img: img_colored,
    },
    {
      name: "ifrared",
      img: img_irbig,
    },
    {
      name: "visual",
      img: img_vis,
    },
  ];

  const setImageFocus = (info: any) => {
    setImageInfo(
      `LATEST: ${info.name.toUpperCase()}`,
      `${moment().format("MM-DD-YYYY")}`
    );
    let mainImage: any = document.getElementById("main-image");
    mainImage.src = info.img;
  };

  return (
    <>
      <div className="current-image-modes">
        {imageSet.map((x: any) => {
          return (
            <div
              className="image-box"
              onClick={() => {
                setImageFocus(x);
              }}
            >
              <small>
                <i className="la la-cube" /> {x.name}
              </small>
              <LazyLoad heigh={100}>
                <img src={x.img} alt="latest preview" />
              </LazyLoad>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CurrentImageModes;
