const CategoryModel = require("../models/categorymodel");

const createcategory = (req, res) => {
  const product = req.body;
  const newProduct = new CategoryModel(product);
  try {
    newProduct.save();
    return res.status(200).json({
      message: "Product created successfuly",
      result: newProduct,
      count: newProduct.count,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const getAllProducts = (req, res) => {
  try {
    const product = CategoryModel.find({})
    return res.status(200).json({
      message: "Product fetched successfuly",
      result: product,

    })
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}
module.exports = {
  createcategory,
  getAllProducts
}

