const express = require('express');
const Tenant = require('../models/Tenant');
const { getProductModel } = require('../models/Product');
const router = express.Router({ mergeParams: true });

router.use(async (req, res, next) => {
    try {
        const tenant = await Tenant.findById(req.params.tenantId);
        if (!tenant) {
            return res.status(404).json({ error: "Tenant not found" });
        }
        next();
    } catch (error) {
        return res.status(404).json({ error: "Tenant not found" });
    }
});

router.post('/', async (req, res) => {
    try {
        const Product = getProductModel(req.params.tenantId);
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const Product = getProductModel(req.params.tenantId);
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const Product = getProductModel(req.params.tenantId);
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const Product = getProductModel(req.params.tenantId);
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;