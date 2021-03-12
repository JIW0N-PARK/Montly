var express = require('express');
var router = express.Router();
var User = require('../models/user');
const catchErrors = require('../lib/async-error');
var bcrypt = require('bcrypt');

function generateHash(password){
  return bcrypt.hash(password, 10);
}

function validateEmail(email){
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateForm(form){
  var name = form.name || "";
  var email = form.email || "";

  if(!name) {
    return '멋진 이름이 있으시잖아요.';
  }

  if(name.length < 2) {
    return '이름은 두 글자 이상 입력해주세요.';
  }

  if (!email) {
    return '꼭 필요해요.';
  }

  if (!validateEmail(email)){
    return '이메일 주소가 맞나요?';
  }

  if (!form.password) {
    return '비밀번호를 입력해주세요.';
  }

  if (form.password !== form.password_confirmation) {
    return '비밀번호가 일치하지 않습니다.';
  }

  if (form.password.length < 6) {
    return '비밀번호가 너무 짧습니다. (6자 이상)';
  }

  return null;
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Users' });
});

router.get('/sign_in', (req, res) => {
  res.render('users/signin', {});
});

router.get('/email_sign_in', (req, res) => {
  res.render('users/email_signin', {});
});

router.get('/sign_up', (req, res) => {
  res.render('users/signup', {});
});

router.get('/email_sign_up', (req, res) => {
  res.render('users/email_signup', {});
});

router.post('/new', catchErrors(async (req, res, next) => {
  console.log(req.body)
  var err = validateForm(req.body);
  if(err){
    console.log('danger : '+err);
    return res.redirect('back');
  }
  var user = await User.findOne({email: req.body.email});
  if(user) {
    console.log('danger : 이미 존재하는 이메일입니다.');
    return res.redirect('back');
  }
  var password = await generateHash(req.body.password);
  user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: password
  });
  console.log('success : Registered successfully. Please sign in.');
  res.redirect('/');
}));

module.exports = router;
