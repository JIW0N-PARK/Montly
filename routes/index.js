var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { main: true });
});

router.get('/becomepartner', (req, res, next) => {
  res.render('becomepartner', {});
});

module.exports = router;
