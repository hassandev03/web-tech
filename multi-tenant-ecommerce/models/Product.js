const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    category: String
});

const getProductModel = (tenantId) => {
    const modelName = `Product_${tenantId}`;
    const collectionName = `tenant_${tenantId}_products`;
    if (mongoose.models[modelName]) {
        return mongoose.models[modelName];
    }
    return mongoose.model(modelName, ProductSchema, collectionName);
};

module.exports = { ProductSchema, getProductModel };
