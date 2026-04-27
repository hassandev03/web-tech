const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/multitenant_ecommerce');
};

module.exports = { connectDB };