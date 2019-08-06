require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const stripe = require('stripe')(process.env.SECRET);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./models/models');

const api = require('./routes/stripeApi');
const auth = require('./routes/auth');

//mongoose.connect('mongodb://'+process.env.MONGODBUSER+':'+process.env.MONGODBPW+'@ds111549.mlab.com:11549/gypsy')
mongoose.connect(
  'mongodb://' +
    process.env.MONGODBUSER +
    ':' +
    process.env.MONGODBPW +
    '@ds111549.mlab.com:11549/gypsy',
  { useMongoClient: true }
);

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('build'));
app.use('/api', api);
//app.use('/auth', auth) used to query db to find customer number

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is alive, listening on port ${port}`);
});
