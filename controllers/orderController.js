const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    console.log("🔥 Received order data:", req.body); // Log incoming data

    const order = new Order(req.body);
    const savedOrder = await order.save();

    console.log("✅ Order saved with ID:", savedOrder._id); // Log saved ID

    res.status(201).json({ success: true, orderId: savedOrder._id });
  } catch (err) {
    console.error("❌ Error saving order:", err.message); // Log specific error message
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
