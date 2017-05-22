const express = require('express');
const logger = require('morgan');
const stripe = require('stripe')(process.env.SECRET);
const bodyParser = require('body-parser');

const app = express();


app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('build'))


app.post("/order", (req, res) => {
  stripe.orders.create({
    currency: 'usd',
    items: [
      {
        type: 'sku',
        parent: req.body.productSku,
      }
    ],
    shipping: {
      name: req.body.shipping_name,
      address: {
        line1: req.body.shipping_address_line1,
        line2: req.body.shipping_address_line2 ? req.body.shipping_address_line2 : "",
        city: req.body.shipping_address_city,
        state: req.body.shipping_address_state,
        country: req.body.shipping_address_country_code,
        postal_code: req.body.shipping_address_zip
      }
    },
    email: req.body.email
  }, function(err, order) {
    if (err) throw err;

    stripe.orders.pay(order.id, {
      source: req.body.id,
      email: req.body.email,
    }, function(err, order) {
      if (err) res.status(401).send("order was not succesful")
      res.status(200).send("order was succesful")
    });
  });
})

app.listen(3001, () => {
  console.log('listening on port: 3001')
});
