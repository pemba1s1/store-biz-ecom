
const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  items: [{
    product_id: String,
    quantity: Number
  }]
},{ timestamps: true });

const OrderItemModel = mongoose.model('OrderItem', orderItemSchema);
exports.default = OrderItemModel;
