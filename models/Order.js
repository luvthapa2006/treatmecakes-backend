const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  product: String,
  flavor: String,
  weight: String,
  message: String,
  deliveryDate: Date,
  customer: {
    name: String,
    phone: String,
    email: String
  },
  address: {
    street: String,
    sector: String,
    pincode: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);
