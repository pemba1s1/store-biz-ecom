
const stripe = require("../lib/stripe");

const createPaymentIntent = async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: 'cad',
    automatic_payment_methods: { enabled: true },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}

module.exports = { createPaymentIntent };
