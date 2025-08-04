const Order = require('../models/Order');
const sendOrderConfirmationEmail = require('../utils/mailer');

exports.placeOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();

    // 📨 Send email to aunt
    await sendOrderConfirmationEmail(order);

    res.status(201).json({ success: true, orderId: order._id });
  } catch (err) {
    console.error("❌ Error saving order or sending email:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
