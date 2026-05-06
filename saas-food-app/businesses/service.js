const Business = require('./models/Business');

const toSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

const getById = (id) => Business.findById(id);

const create = (data) => {
  const slug = toSlug(data.name);
  return Business.create({ ...data, slug });
};

const update = (id, data) => Business.findByIdAndUpdate(id, data, { returnDocument: 'after' });

const remove = (id) => Business.findByIdAndDelete(id);

module.exports = { getById, create, update, remove };
