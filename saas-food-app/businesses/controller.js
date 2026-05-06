const service = require('./service');

const getOne = async (req, res) => {
  try {
    const business = await service.getById(req.params.id);
    if (!business) return res.status(404).json({ message: 'Business not found' });
    res.json(business);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const create = async (req, res) => {
  try {
    res.status(201).json(await service.create(req.body));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    res.json(await service.update(req.params.id, req.body));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await service.remove(req.params.id);
    res.json({ message: 'Business deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getOne, create, update, remove };
