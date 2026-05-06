const router = require('express').Router();
const businessRouter = require('../businesses/route');
const customerRouter = require('../customers/route');

router.post('/register/business', (req, res, next) => {
  req.url = '/';
  businessRouter(req, res, next);
});

router.post('/register/customer', (req, res, next) => {
  req.url = '/';
  customerRouter(req, res, next);
});

module.exports = router;
