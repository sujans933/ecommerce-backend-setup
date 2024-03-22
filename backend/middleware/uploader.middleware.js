const multer = require("multer");

const mystorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.cwd() + "/backend/uploads"); //cd always take error as first paramater
  },
  filename: (req, file, cb) => {
    // console.log(file);
    let file_name = Date.now() + "-" + file.originalname; //current time stamp
    cb(null, file_name);
  },
});
const imageFilter = (req, file, cb) => {
  let parts = file.originalname.split(".");
  let ext = parts[parts.length - 1];
  let allowed = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp"];
  // extension based validation
  if (allowed.includes(ext)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: mystorage,
  fileFilter: imageFilter,
});

module.exports = upload;
