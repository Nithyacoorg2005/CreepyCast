const express = require('express');
const stripe = require('stripe')('YOUR_SECRET_KEY'); // Use your Stripe Secret Key here
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route to create a payment intent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,  // Amount in cents
      currency: 'usd',
      payment_method_types: ['card'],
    });
    
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
