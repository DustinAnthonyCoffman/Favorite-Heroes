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

