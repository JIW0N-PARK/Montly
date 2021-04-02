var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Basic = require('../models/product_basic');
const catchErrors = require('../lib/async-error');

function setLanguage(languages){
  console.log(languages);
  var str = '';
  languages.forEach(element => {
    str += element+"/";
  });
  console.log(str);
  return str;
}

router.get('/', catchErrors(async (req, res, next) => {
  const list =  await Product.findAll({
    where: {partner_id: req.session.partner.id}
  });
  const count = 100;
  if(list != null){
    var products = [];
    list.forEach(catchErrors(async (item) => {
      const product = await Basic.findByPk(item.dataValues.basic_id);
      products.push(product);
    })); // foreach 안에서는 products에 push가 되는데 나오면 안됨. promise all()? 공부 필요
    console.log(products);
    res.render('partners/products', {count: count, products: products});
  }
  else{
    const products = [];
    res.render('partners/products', {count: count, products: products});
  }
}));

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
    partner_id: req.session.partner.id,
    basic_id: basic.id
  });
  req.flash('success', 'Saved successfully.');
  res.redirect('/partners/products');
}));

module.exports = router;