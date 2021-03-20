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

module.exports = router;