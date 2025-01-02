const express = require('express');
const stripe = require('stripe')('YOUR_SECRET_KEY'); 
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount, 
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


app.listen(5000, () => console.log('Server running on port 5000'));
