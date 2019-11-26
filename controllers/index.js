var request = require('request');
const User = require('../models/user')

function index(req, res, next) {
      res.render('index', {
        user,
        user: req.user,
        name: req.query.name,
        sortKey
      });
    }

  module.exports = {
      index
  }