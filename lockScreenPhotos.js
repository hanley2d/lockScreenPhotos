require("dotenv").config();
const fs = require("fs");
const path = require("path");
const probe = require("probe-image-size");

const dirPath = process.env.DIR_PATH;
const destination = process.env.DESTINATION;
const fileExtension = ".png";

// read files in directory into an array
let fileArray = fs.readdirSync(dirPath);

// iterate through array
fileArray.forEach((file, index) => {
  // original directory path
  let fullPath = path.join(dirPath, file);
  // add extension to file name
  let newFileName = file + fileExtension;
  // check height of photo. don't want vertical photos.
  let data = fs.readFileSync(path.join(dirPath, file));
  if (probe.sync(data).height != 1920) {
    try {
      // copy files with new extension appended to new destination directory
      fs.copyFileSync(fullPath, path.join(destination, newFileName));
    } catch (error) {
      console.log(error);
    }
  }
});
