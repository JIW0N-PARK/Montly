var express = require('express');
var router = express.Router();
var Partner = require('../models/partner');
const catchErrors = require('../lib/async-error');
var products = require('./products');

router.get('/', (req, res, next) => {
  if(req.session.user == null){
    return res.redirect('/users/sign_in');
  }
  else if(req.session.partner == null){
    res.render('partners/index');
  }
  res.render('partners/dashboard', {partner: req.session.partner});
});

router.get('/new', (req, res, next) => {
  res.render('partners/new');
});

router.post('/new', catchErrors(async (req, res, next) => {
  await Partner.create({
    name: req.session.user.name,
    email: req.session.user.email,
    kakaoID: req.body.kakaoID,
    description: req.body.description,
    user_id: req.session.user.id
  });
  req.flash('success', 'Registered successfully.');
  res.redirect('/');
}));

router.use('/products', products);

module.exports = router;