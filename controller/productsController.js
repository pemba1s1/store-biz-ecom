
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

module.exports = { getTopDeals, getNewArrival, getProductById };
