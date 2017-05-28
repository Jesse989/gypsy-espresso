const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Customer = mongoose.model('Customer');
const stripe = require('stripe')('sk_test_3Iyf7nqfyKq25EwXfOzD2oZ4');

// functions to be used in routes
const getCustomer = (payload, cb) => {
  Customer.findOne({ 'email': payload.email }, ((err, customer) => {
    if (err) return err;
    if (customer) {
      cb(payload, customer);
    } else {
      createCustomer(payload);
    };
  }))
};

const createCustomer = (payload) => {
  stripe.customers.create({
    source: payload.id,
    email: payload.email,
  }, ((err, customer) => {
    if (err) return err;
    const newCustomer = new Customer({ email: customer.email, customerId: customer.id });
    newCustomer.save((err) => {
      if (err) return err;
      createOrder(payload, newCustomer);
    })
  }))
};

const createOrder = (payload, customer) => {
  stripe.orders.create({
    currency: 'usd',
    items: [
      {
        type: 'sku',
        parent: payload.productSku,
      },
    ],
    shipping: {
      name: payload.shipping_name,
      address: {
        line1: payload.shipping_address_line1,
        line2: payload.shipping_address_line2 ? payload.shipping_address_line2 : "",
        city: payload.shipping_address_city,
        state: payload.shipping_address_state,
        country: payload.shipping_address_country_code,
        postal_code: payload.shipping_address_zip
      }
    },
    email: payload.email,
    customer: customer.customerId

  }, ((err, order) => {
    if (err) return err;
      payOrder(payload, customer, order);
  }))
}

const createSubscription = (payload, customer) => {
  console.log(payload);
  stripe.subscriptions.create({
    customer: customer.customerId,
    plan: payload.productName,
    tax_percent: 6,
  }, (err, subscription) => {
    if (err) return err;
    return "success";
  })
}

const payOrder = (payload, customer, order) => {
  stripe.orders.pay(order.id, {
    source: payload.id,
    email: order.email,
  }, ((err, orderConfirmation) => {
    if (err) return err;
    return orderConfirmation;
  }))
}


router.route("/order")
  .post((req, res) => {
    const payload = req.body;
    getCustomer(payload, createOrder);
    res.status(200).send("ok")
})

router.route("/subscribe")
  .post((req, res) => {
    const payload = req.body;
    getCustomer(payload, createSubscription);
    res.status(200).send("ok")
  })

module.exports = router;
