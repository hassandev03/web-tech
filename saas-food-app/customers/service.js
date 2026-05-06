const Customer = require('./models/Customer');

const getAll = () => Customer.find();
const getById = (id) => Customer.findById(id);
const create = (data) => Customer.create(data);
const update = (id, data) => Customer.findByIdAndUpdate(id, data, { returnDocument: 'after' });
const remove = (id) => Customer.findByIdAndDelete(id);

module.exports = { getAll, getById, create, update, remove };
