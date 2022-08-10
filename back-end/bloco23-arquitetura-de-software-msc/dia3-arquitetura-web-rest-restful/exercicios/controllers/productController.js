const ProductModel = require('../models/productModel');

const getProducts = async (req, res) => {
  const products = await ProductModel.getAll();

  return res.status(200).json(products);

};

const getProductById = async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.ad
  d(name, brand);

  res.status(201).json(newProduct);
};

const deleteProduct = async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.status(200).end();
};

const updateProduct = async (req, res) => {
  const { name, brand } = req.body;

  const product = await ProductModel.update(req.params.id, name, brand);

  res.status(200).json(product);
};

module.exports = { getProducts, getProductById, createProduct, deleteProduct, updateProduct };