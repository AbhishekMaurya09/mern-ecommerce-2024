// helpers/paypal.js
const paypal = require('paypal-rest-sdk');
require('dotenv').config();  // Ensure you load .env variables

// Configure PayPal API with your credentials
paypal.configure({
  mode: process.env.PAYPAL_MODE || 'sandbox',  // 'sandbox' for testing, 'live' for production
  client_id: process.env.PAYPAL_CLIENT_ID,    // Your PayPal Client ID
  client_secret: process.env.PAYPAL_CLIENT_SECRET  // Your PayPal Client Secret
});

module.exports = paypal;
