const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
import multer from "multer";
import Gallery from "../models/gallery";

cloudinary.config({
  cloud_name: "goran",
  api_key: "347353919781489",
  api_secret: "9zIoxCx6DNflw27IuzgWk84lzK0",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Gallery",
  },
});

const upload = multer({ storage: storage });

export const create = async (req, res) => {
  try {
    const image = req.file.path;
    if (!image) {
      return res.status(401).json(error.message);
    }
    const photo = new Gallery({
      id:req.body.id,
      image:image,
      categories:req.body.categories
    });
    console.log(photo)
    const obj = await Gallery(photo).save();
    return res.json(obj);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};



module.exports = { upload, create,};
