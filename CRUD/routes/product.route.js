const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} = require("../controller/product.controller.js");

router.get("/allproducts", getAllProducts);
router.get("/product/:id", getProductById);
router.post("/products", createProduct);
router.put("/product/:id", updateProductById);
router.delete("/product/:id", deleteProductById);
module.exports = router;
