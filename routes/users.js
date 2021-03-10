var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Users' });
});

router.get('/sign_in', (req, res) => {
  res.render('users/signin', {});
});

module.exports = router;
