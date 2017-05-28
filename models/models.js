const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  email: String,
  name: String,
  customerId: String,
});

mongoose.model('Customer', customerSchema);
