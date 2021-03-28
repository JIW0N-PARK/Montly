var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Basic = require('../models/product_basic');
const catchErrors = require('../lib/async-error');

function setLanguage(languages){
  console.log(languages);
  var str = '';
  for(var language in languages){
    if(req.body.hasOwnProperty(language)){
      str.concat('/', req.body[language]);
    }
  }
  console.log(str);
  return str;
}

router.get('/', (req, res, next) => {
  res.render('partners/products', {});
});

router.get('/new', catchErrors(async (req, res, next) => {
  res.render('partners/products/new');
}));

router.post('/new_basic', catchErrors(async (req, res, next) => {
  console.log(req.body);
  const basic = await Basic.create({
    contry: req.body.contry,
    city: req.body.city,
    category: req.body.categoryRadio,
    language: setLanguage(req.body.languages),
    title: req.body.title,
    summary: req.body.summary,
    description: req.body.description,
    scale: req.body.scale,
    vehicle: req.body.vehicle,
    image: req.body.image,
    time: req.body.time
  });
  await Product.create({
    partner_id: req.session.partner.partner_id,
    basic_id: basic
  });
  req.flash('success', 'Saved successfully.');
  res.redirect('/partners/products');
}));

module.exports = router;