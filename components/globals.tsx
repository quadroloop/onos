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

export const latest_colored =
  "https://src.meteopilipinas.gov.ph/repo/mtsat-colored/24hour/latest-him-colored.gif";

export const resetImage = () => {
  let mainImage: any = document.getElementById("main-image");
  if (mainImage) {
    mainImage.src = latest_colored;
  }
};
