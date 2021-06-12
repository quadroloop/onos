import moment from "moment";

export const gotoRecords = () => {
  let link: any = document.getElementById("records");
  if (link) {
    link.click();
  }
};

export const gotoSettings = () => {
  let link: any = document.getElementById("settings");
  if (link) {
    link.click();
  }
};

export const gotoOverview = () => {
  let link: any = document.getElementById("overview");
  if (link) {
    link.click();
  }
};

export const latest_colored =
  "https://src.meteopilipinas.gov.ph/repo/mtsat-colored/24hour/latest-him-colored.gif";

export const img_colored =
  "http://src.meteopilipinas.gov.ph/repo/mtsat-colored/24hour/latest-him-colored.gif";
export const img_irbig =
  "http://src.meteopilipinas.gov.ph/repo/himawari/24hour/irbig/latestHIM_irbig.gif";
export const img_vis =
  "http://src.meteopilipinas.gov.ph/repo/himawari/24hour/visbig/latestHIM_visbig.gif";

export const resetImage = () => {
  let mainImage: any = document.getElementById("main-image");
  if (mainImage) {
    mainImage.src = latest_colored;
  }
};

export const setImageInfo = (title: string, date: string) => {
  let infoTab: any = document.getElementById("image-info");
  let infoTemplate = `
  <span>
    <i class="la la-bullseye text-active"></i> <strong>${title}</strong> |
    ${moment(date).format("MMM. D, YYYY")} (${moment(date).fromNow()})
  </span>
  `;

  infoTab.innerHTML = infoTemplate;
};

export const ImageToCanvas = () => {
  // Get the canvas element and set the dimensions.
  var canvas: any = document.getElementById("image_canvas");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // Get a 2D context.
  var ctx = canvas.getContext("2d");

  // create new image object to use as pattern
  let imgMain: any = document.getElementById("main-image");
  var img = new Image();
  img.src = imgMain.src;
  img.onload = function () {
    // Create pattern and don't repeat!
    var ptrn = ctx.createPattern(img, "no-repeat");
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
};
