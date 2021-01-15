const express = require("express");
const enforce = require('express-sslify');
require('dotenv').config();
const app = express();
enforce.HTTPS({ trustProtoHeader: true });
app.use(enforce.HTTPS());

const htmlRoutes = require('./routes/htmlRoutes')

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

// This is your real test secret API key.
const stripe = require("stripe")(`${stripeSecretKey}`);

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = items => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return items[0].price;
};

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd"
    });

    res.send({
        clientSecret: paymentIntent.client_secret
    });
});

app.use('/', htmlRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
});