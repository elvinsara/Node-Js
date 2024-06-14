const ProductController = require("../models/product.model");
const Product = require("../models/product.model");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const getProductById = await Product.findById(id);
    res.status(200).json(getProductById);
    console.log(req.params.id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  console.log(req.body);

  try {
    const product = await Product.create(req.body);

    console.log(product);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const getProductById = await Product.findByIdAndUpdate(id, req.body);
    console.log(getProductById);
    if (!getProductById) {
      console.log(1);
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // res.send(req.params.id);
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const getProduct = await Product.findByIdAndDelete(id);
    if (!getProduct) {
      return res.status(404).json("Product not found");
    }
    //const deleteProduct = await Product.delete(getProduct);
    return res.status(200).json("Product deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
