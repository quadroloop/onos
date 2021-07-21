const compress_images = require("compress-images");
let INPUT_path_to_your_images;
let OUTPUT_path;

INPUT_path_to_your_images =
  "./public/dataset/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}";
OUTPUT_path = "./public/compressed/";

compress_images(
  INPUT_path_to_your_images,
  OUTPUT_path,
  { compress_force: false, statistic: true, autoupdate: true },
  false,
  { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
  { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
  { svg: { engine: "svgo", command: "--multipass" } },
  { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
  function (error, completed, statistic) {
    console.log("-------------");
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log("-------------");
  }
);
