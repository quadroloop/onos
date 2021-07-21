const compress_images = require("compress-images");
const { exec } = require("child_process");

const data_directory = ["train", "validation"];

data_directory.forEach(async (dir) => {
  let INPUT_path = `./public/neural_engine/data/${dir}/*/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}`;
  let OUTPUT_path = `./public/neural_engine/data/${dir}-compressed/`;

  await compress_images(
    INPUT_path,
    OUTPUT_path,
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    {
      gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
    },
    function (error, completed, statistic) {
      console.log("-------------");
      console.log(error);
      console.log(completed);
      console.log(statistic);
      console.log("-------------");
    }
  );

  // clean directories

  // console.log("cleaning directories...");

  // exec(
  //   `rm -rf ./public/neural_engine/data/${dir} &&  mv ./public/neural_engine/data/${dir}-compressed ./public/neural_engine/data/${dir}`,
  //   (err, stdout, stderr) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log(stdout);
  //   }
  // );
});
