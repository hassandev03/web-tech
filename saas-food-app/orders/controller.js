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
    const order = await service.getById(req.body.slug, req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
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
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getOne, create, update, remove };
