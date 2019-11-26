// var request = require('request');
const User = require('../models/user');

module.exports = {
    index
}

function index(req, res, next) {
    console.log('i have logged in ' + req.user)
    User.find({},
      res.render('index', {  
      user: req.user
     }))
    };

// function index(req, res, next) {
//     let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
//     // Default to sorting by name
//     let sortKey = req.query.sort || 'name';
//     User.find(modelQuery)
//     .sort(sortKey).exec(function(err, users) {
//       if (err) return next(err);
//       // Passing search values, name & sortKey, for use in the EJS
//       res.render('index', { 
//       users, 
//       user: req.user,
//       name: req.query.name, 
//       sortKey });
//     });
//   }