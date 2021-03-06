const express = require('express');
const router = express.Router();
const articles = require('./articles');

router.get('/', (req, res) => {
  res.json({message: 'welcome to basic url'});
});

router.use('/articles', articles);

module.exports = router;