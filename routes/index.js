const express = require('express');
const router = express.Router();
const passport = require('passport');
const indexCtrl = require('../controllers/index')

const rootURL = 'https://superheroapi.com/';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user: req.user});
});

 // Google OAuth login route
 router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

 // Google OAuth callback route
 router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/home',
    failureRedirect : '/'
  }
));


router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});






module.exports = router;
