const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  category: String
});

const OrderSchema = new mongoose.Schema({
  customerName: String,
  items: [ProductSchema],
  totalAmount: Number,
  paymentMethod: String,
  orderDate: { type: Date, default: Date.now }
});

module.exports = {
  Product: mongoose.model('Product', ProductSchema),
  Order: mongoose.model('Order', OrderSchema)
};
