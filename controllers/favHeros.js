const User = require('../models/user');




module.exports = {
    create,
    show
}


function create(req,res, next) {
User.findById(req.user._id).exec(function(err,user) {
    let {
        name, 
        image, 
        base, 
        occupation
    } = req.body   //let name = req.body.name, let image = req.body.image etc.
    user.heros.push({name, image, base, occupation});  //could also do work.base, work.occupation
    user.save(function(err) {   //if user.hero.name exists render error
        if (err) return next(err)
        res.render('logged-In/favHeros', {
            heros: user.heros

        })
    })
})
}
     




function show(req, res) {
    console.log('now showing!!!?!??!?!')
    User.findById(req.user._id).exec(function(err, user) {
        if (err) res.render('logged-In/heros')
        res.render('logged-In/favHeros', {
                heros: user.heros
        })
    })
}