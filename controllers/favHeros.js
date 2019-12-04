const User = require('../models/user');




module.exports = {
    create,
    show,
    delete: deleteThis
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
    User.findById(req.user._id).exec(function(err, user) {
        if (err) res.render('logged-In/heros')
        res.render('logged-In/favHeros', {
                heros: user.heros
        })
    })
}



function deleteThis(req,res) {
    let heroIndex = req.params.id;
    User.findById(req.user._id).exec(function(err, user) {
        let exactId = user.heros[heroIndex]._id
        if (err) res.render('logged-In/heros')
        user.heros.pull(exactId).then(res.redirect('/favHeros'))   
       
            })
        }