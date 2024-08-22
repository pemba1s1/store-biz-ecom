
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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
  image: {
    type: [String]
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
},{ timestamps: true });

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
