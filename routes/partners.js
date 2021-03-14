var express = require('express');
var router = express.Router();
const catchErrors = require('../lib/async-error');

router.get('/', (req, res, next) => {
  res.render('partners/index');
});

module.exports = router;