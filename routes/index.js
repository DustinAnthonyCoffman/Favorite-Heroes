var express = require('express');
var router = express.Router();
var passport = require('passport');
var indexCtrl = require('../controllers/index')

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
    successRedirect : '/',
    failureRedirect : '/'
  }
));


router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});






// router.post('/', function(req,res) {
//   request(
//   `${rootURL}users/${req.body.username}?access_token=${process.env.SUPERHERO_TOKEN}`,
//   function(err, response, body) {
//     res.render('index', {userData: body});
//   }
// )
// });

module.exports = router;
