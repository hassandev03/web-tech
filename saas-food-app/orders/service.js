const { getOrderModel } = require('./models/Order');
const { getProductModel } = require('../products/models/Product');

const getAll = (slug) => getOrderModel(slug).find().populate('customerId').populate('businessId');

const getById = (slug, id) => {
  const ProductModel = getProductModel(slug);
  return getOrderModel(slug)
    .findById(id)
    .populate('customerId')
    .populate('businessId')
    .populate({ path: 'items.productId', model: ProductModel });
};

const create = (slug, data) => getOrderModel(slug).create(data);
const update = (slug, id, data) => getOrderModel(slug).findByIdAndUpdate(id, data, { returnDocument: 'after' });
const remove = (slug, id) => getOrderModel(slug).findByIdAndDelete(id);

module.exports = { getAll, getById, create, update, remove };
