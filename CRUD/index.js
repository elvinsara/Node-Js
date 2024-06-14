//import express package to the variable express
const express = require("express");
//instantiate application by calling express method
const app = express();

const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const ProductRoute = require("./routes/product.route.js");
console.log(Product);
const PORT = 3000;

app.use(express.json());

//if you want to add data in the form
app.use(express.urlencoded({ extended: false }));

app.use("/api", ProductRoute);

//call back fn with 2 objects re and res
//REQ : request parameters, the headers, the body of the request res.send(req.body);
app.get("/", (req, res) => {
  res.send("Hello world.Elvin Here");
});

//get all products
app.get("api/allproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get a single product
app.get("api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getProductById = await Product.findById(id);
    res.status(200).json(getProductById);
    console.log(req.params.id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // res.send(req.params.id);
});

app.post("api/products", async (req, res) => {
  console.log(req.body);

  try {
    const product = await Product.create(req.body);

    console.log(product);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("api/product/:id", async (req, res) => {
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
});

app.delete("api/product/:id", async (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
//mongoose.connect - connection string

mongoose
  .connect(
    "mongodb+srv://elvinsara1999:oH8rJwJwCWHGjrSr@cluster0.xzqqfzu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database:", err);
  });

//mongodb+srv://elvinsara1999:oH8rJwJwCWHGjrSr@cluster0.xzqqfzu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
