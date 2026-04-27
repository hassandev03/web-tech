const express = require('express');
const { connectDB } = require('./db');
const tenantsRouter = require('./routes/tenants');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

const app = express();
app.use(express.json());

connectDB().then(() => {
    console.log('MongoDB connected');
});

app.use('/tenants', tenantsRouter);
app.use('/tenants/:tenantId/products', productsRouter);
app.use('/tenants/:tenantId/orders', ordersRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});