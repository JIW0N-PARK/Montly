var express = require('express');
var router = express.Router();
var Partner = require('../models/partner');
const catchErrors = require('../lib/async-error');

router.get('/', (req, res, next) => {
  if(req.session.user == null){
    return res.redirect('/users/sign_in');
  }
  res.render('partners/index');
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

module.exports = router;