const Hero = require('../models/user');
const User = require('../models/user');




module.exports = {
    create,
    show
}


function create(req,res, next) {
console.log(req.user._id);
User.findById(req.user._id).exec(function(err,user) {
    user.heros.push(req.body);
    console.log(user.heros);
    user.save(function(err) {
        if (err) return next(err)
        res.render('logged-In/favHeros', {
            heros: user.heros

        })
    })
})
}
     




function show(req, res) {
    // pull up the user id and get the favortites from the user not the heros
  //use passport to access google id from Oauth
  console.log(req.user)
    Hero.find({hero: hero._id}, function(err, heros) {
    res.render('logged-In/favHeros', {
        heros
    })
  })
 
}

