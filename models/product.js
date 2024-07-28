
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  discount: {
    type: String
  },
  quantity: {
    type: Number
  },
  image: {
    type: [String]
  },
  discountedPrice: {
    type: String
  },
  rating: {
    type: Number
  },
  category: {
    type: String
  },
  stock: {
    type: Number
  }
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
