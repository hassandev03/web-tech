const service = require('./service');

const requireSlug = (req, res) => {
  if (!req.body.slug) { res.status(400).json({ message: 'slug is required' }); return false; }
  return true;
};

const getAll = async (req, res) => {
  if (!requireSlug(req, res)) return;
  try {
    res.json(await service.getAll(req.body.slug));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getOne = async (req, res) => {
  if (!requireSlug(req, res)) return;
  try {
    const product = await service.getById(req.body.slug, req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const create = async (req, res) => {
  if (!requireSlug(req, res)) return;
  try {
    const { slug, ...data } = req.body;
    res.status(201).json(await service.create(slug, data));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const update = async (req, res) => {
  if (!requireSlug(req, res)) return;
  try {
    const { slug, ...data } = req.body;
    res.json(await service.update(slug, req.params.id, data));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const remove = async (req, res) => {
  if (!requireSlug(req, res)) return;
  try {
    await service.remove(req.body.slug, req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getOne, create, update, remove };
