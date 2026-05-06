const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/saas_food_app')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('DB error:', err));

app.use('/auth', require('./auth/route'));
app.use('/businesses', require('./businesses/route'));
app.use('/customers', require('./customers/route'));
app.use('/products', require('./products/route'));
app.use('/orders', require('./orders/route'));

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));
app.use((err, req, res, next) => res.status(500).json({ message: err.message }));

module.exports = app;
