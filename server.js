const express = require("express");
require('dotenv').config();
const path = require('path');
const app = express();

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

app.get('/', (req, res) => {
    // res.sendFile() will respond with a html page to display in the browser, 
    // this will tellthem where to fine the file we want our server to read and send it back to client
    res.sendFile(path.join(__dirname, './public/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
});