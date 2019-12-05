const User = require('../models/user');




module.exports = {
    create,
    show,
    delete: deleteThis,
    update
}


function create(req,res, next) {
User.findById(req.user._id).exec(function(err,user) {
    let {
        name, 
        image, 
        rating,
        base, 
        occupation
    } = req.body   //let name = req.body.name, let image = req.body.image etc.
    user.heros.push({name, image, rating, base, occupation});  //could also do work.base, work.occupation
    user.save(function(err) {   //if user.hero.name exists render error
        if (err) return next(err)
        res.render('loggedIn/favHeros', {
            heros: user.heros

        })
    })
})
}
     

function show(req, res) {
    User.findById(req.user._id).exec(function(err, user) {
        if (err) res.render('loggedIn/heros')
        res.render('loggedIn/favHeros', {
                heros: user.heros
        })
    })
}



function deleteThis(req,res) {
    let heroIndex = req.params.id;
    User.findById(req.user._id, function(err, user) {
        user.heros.remove(heroIndex);
        user.save(function(err) {
        res.redirect('/favHeros')
    })
})

}

function update(req,res) {
    let heroId = req.params.id; //users hero mongo id, i.e. what was in our url request
    User.findById(req.user._id, function(err, user) {
        let userHero = user.heros;  //syntax to use forEach :)
        userHero.forEach(function(h, idx) {
            if(h._id == heroId) {    //if the id of the hero is = to our url id
                let userRating = req.body.rating 
                user.heros[idx].rating = userRating;
                user.save(function(err) {
                    res.redirect('/favHeros')
                })
            }
        })
    })
}
