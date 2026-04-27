const express = require('express');
const Tenant = require('../models/Tenant');
const { getProductModel } = require('../models/Product');
const { getOrderModel } = require('../models/Order');
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
        const { customerId, items } = req.body;
        const Product = getProductModel(req.params.tenantId);
        const Order = getOrderModel(req.params.tenantId);

        let total = 0;
        const processedItems = [];

        for (const item of items) {
            const product = await Product.findOneAndUpdate(
                { _id: item.productId, stock: { $gte: item.qty } },
                { $inc: { stock: -item.qty } },
                { new: true }
            );

            if (!product) {
                return res.status(400).json({ error: "Insufficient stock or product not found" });
            }

            const price = product.price;
            total += price * item.qty;
            processedItems.push({ productId: item.productId, qty: item.qty, price });
        }

        const order = new Order({
            customerId,
            items: processedItems,
            total,
            status: 'pending'
        });

        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const Order = getOrderModel(req.params.tenantId);
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const Order = getOrderModel(req.params.tenantId);
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;