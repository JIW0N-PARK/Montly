var express = require('express');
var router = express.Router();
var Partner = require('../models/partner');
const catchErrors = require('../lib/async-error');

router.get('/', (req, res, next) => {
  res.render('partners/products', {});
});

router.get('/new', catchErrors(async (req, res, next) => {
  res.render('partners/products/new');
}));

router.post('/new_basic', catchErrors(async (req, res, next) => {
  console.log(req.body);
}));

module.exports = router;