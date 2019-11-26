var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/home')


/* GET users listing. */
router.get('/', homeCtrl.homePage);

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
