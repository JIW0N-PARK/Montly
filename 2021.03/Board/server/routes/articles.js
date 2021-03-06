const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({message: 'Here is Articles.js'});
});

router.get('/:id', (req, res, next) => {
  if(req.params.id === '0') next('route');
  else next();
}, (req, res) => {
  res.json({message: 'regular'});
});

router.get('/:id', function (req, res, next) {
  console.log(req.params.id);
  res.json({message: 'special'});
});

module.exports = router;