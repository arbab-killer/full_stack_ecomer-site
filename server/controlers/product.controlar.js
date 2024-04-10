import multer from "multer";
import path from "path";
import Product from "../models/product.model.js";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config()
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => {
    const unquename = `/${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, unquename);
  },
});
const handlemiltipartdata = multer({
  storage,
  limits: { fileSize: 1000000 * 5 },
}).single("image");
const allproducts = async function (req, res) {
  try {
    const product = await Product.find();
    res.setHeader('Content-Type', 'image/jpg');
    return res.status(200).json({ data: product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createproduct = function (req, res) {
  handlemiltipartdata(req, res, async (err) => {
    const image = req.file.path;
    console.log(image);
    if (err) {
      fs.unlink(`${image}`, function (err) {
        if (err) return console.log(err);
        console.log("file deleted successfully");
      });
      return res.status(500).json({ message: err.message });
    }
    

    const {
      name,
      description,
      price,
      category,
      brand,
      numReviews,
      countInStock,
      rating,
    } = req.body;
    if (!(name && description && price &&rating  && category && brand && countInStock)) {
      fs.unlink(`${image}`, function (err) {
        if (err) return console.log(err);
        console.log("file deleted successfully");
      });
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    
    try {
      const newproduct = await Product.create({
        name,
        description,
        price,
        category,
        brand,
        rating,
        numReviews,
        countInStock,
        image: `${process.env.DOMAIN}${image}`,
      });
      newproduct.save();
      return res
        .status(200)
        .json({ success: true, message: "product created successfully" , data :newproduct});
    } catch (error) {
      fs.unlink(`${image}`,function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
    }); 
      return res.status(500).json({ message: error.message });
    }
  });
};
const singleproduct =async function(req , res) {
  const id = req.params._id;
  if(!id){
    return res.status(404).json({ message: "product not found", success:false})
  }
 const product = await Product.findById(id)
res.send(product)
}
export { allproducts, createproduct , singleproduct};
