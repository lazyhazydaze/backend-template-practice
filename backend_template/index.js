// require Express NPM library
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db/models/index");
const { product } = db;

const ProductsRouter = require("./routers/ProductsRouter");
const ProductsController = require("./controllers/ProductsController");

const PORT = process.env.PORT || 8080;
const app = express();

const productsController = new ProductsController(product);
const productsRouter = new ProductsRouter(express, productsController).routes();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Application listening to port ${PORT} yey`);
});
