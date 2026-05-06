const { getProductModel } = require('./models/Product');

const getAll = (slug) => getProductModel(slug).find();
const getById = (slug, id) => getProductModel(slug).findById(id);
const create = (slug, data) => getProductModel(slug).create(data);
const update = (slug, id, data) => getProductModel(slug).findByIdAndUpdate(id, data, { returnDocument: 'after' });
const remove = (slug, id) => getProductModel(slug).findByIdAndDelete(id);

module.exports = { getAll, getById, create, update, remove };
