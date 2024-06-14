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
