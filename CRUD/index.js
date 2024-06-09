//import express package to the variable express
const express = require("express");
//instantiate application by calling express method
const app = express();

const PORT = 3000;

//call back fn with 2 objects re and res
//REQ : request parameters, the headers, the body of the request
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
