const express = require("express");
var bodyParser = require("body-parser");
const products = require("./src/routes/products");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/products", products);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
