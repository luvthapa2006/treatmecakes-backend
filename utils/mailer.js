// backend/utils/mailer.js
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'smtp.yourprovider.com'
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

function sendOrderConfirmationEmail(order) {
  const mailOptions = {
    from: `"SweetSlice Orders" <${process.env.EMAIL_USER}>`,
    to: "thapaluv1029@gmail.com", // 📬 Change to your aunt's email
    subject: "🎂 New Bakery Order Received!",
    html: `
      <h2>New Order Received 🎉</h2>
      <p><strong>Product:</strong> ${order.product}</p>
      <p><strong>Flavor:</strong> ${order.flavor}</p>
      <p><strong>Message:</strong> ${order.message}</p>
      <p><strong>Weight:</strong> ${order.weight} kg</p>
      <p><strong>Delivery Date:</strong> ${new Date(order.deliveryDate).toDateString()}</p>
      <hr>
      <p><strong>Customer:</strong> ${order.customer.name} (${order.customer.phone})</p>
      <p><strong>Address:</strong> ${order.address.street}, ${order.address.sector} - ${order.address.pincode}</p>
    `
  };

  return transporter.sendMail(mailOptions);
}

module.exports = sendOrderConfirmationEmail;
