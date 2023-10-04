import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  const product = Product(req.body);
  const productSaved = await product.save();
  console.log(productSaved);
  res.send("creando productos");
};
export const updateProduct = (req, res) => {
  console.log("Actualizando productos");
  res.send("actualizando productos");
};
export const deleteProduct = (req, res) => {
  console.log("Eliminando productos");
  res.send("Eliminando productos");
};
export const getProducts = async (req, res) => {
  const products = await Product.find().lean();
  res.json(products);
};
export const getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id).lean();
  res.json(product);
};
