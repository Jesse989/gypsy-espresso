const express = require('express');
const logger = require('morgan');
const stripe = require('stripe')(process.env.SECRET);
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require("./models/models");

const api = require("./routes/stripeApi");
const auth = require("./routes/auth");

//mongoose.connect('mongodb://'+process.env.MONGODBUSER+':'+process.env.MONGODBPW+'@ds111549.mlab.com:11549/gypsy')
mongoose.connect('mongodb://'+process.env.MONGODBUSER+':'+process.env.MONGODBPW+'@ds111549.mlab.com:11549/gypsy')

const app = express();

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('build'))
app.use('/api', api)
//app.use('/auth', auth) used to query db to find customer number

app.listen(process.env.PORT || 3001, () => {
  console.log('listening on port: '+ process.env.PORT)
});
