const User = require('../models/user');

module.exports = {
    homePage
}

function homePage(req, res) {
    res.render('logged-In/home')
}