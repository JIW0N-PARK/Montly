var express = require('express');
var router = express.Router();
const catchErrors = require('../lib/async-error');

router.get('/', (req, res, next) => {
  res.render('partners/index');
});

router.get('/new', (req, res, next) => {
  res.render('partners/new');
});

router.post('/new', catchErrors(async (req, res, next) => {
  
}));

module.exports = router;