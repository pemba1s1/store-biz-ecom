
const ProductModel = require('../models/product');

const getTopDeals = async function(req, res) {
  try {
    const products = await ProductModel.find({ discount: { $gt: 0 } })
      .sort({ discount: -1 })
      .limit(6);
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
}

const getNewArrival = async function(req, res) {
  try {
    const products = await ProductModel.find({})
      .sort({ createdAt: -1 })
      .limit(6);
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
}

const getProductById = async function(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send('Product ID is required');
  }
  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
}

const getProductsByFilter = async function(req, res) {
  const { filters } = req.query;
  console.log(filters)
  const limit = 12;
  
  try {
    const products = await ProductModel.find(filters);
    // console.log(products)
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
}

const uploadProduct = async function(req, res) {
  const { title, price } = req.body;
  if (!title || !price) {
    return res.status(400).send('Missing required fields');
  }

  try {
    const product = new ProductModel({
      ...req.body
    });
    await product.save();
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
}

module.exports = { getTopDeals, getNewArrival, getProductById, getProductsByFilter, uploadProduct };
