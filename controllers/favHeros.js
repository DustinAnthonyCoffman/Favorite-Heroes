const Hero = require('../models/user');
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
    console.log('ayeeee we showing!!!?!??!?!')
    Hero.find({hero: hero._id}, function(err, heros) {
    res.render('logged-In/favHeros', {
        heros
    })
  })
 
}
// if(!req.body){
//     res.render('logged-In/home');
// } else {
// request(`${rootURL}${process.env.SUPERHERO_TOKEN}/search/${req.body.name}`, 
// function(err, response, body) {
//     // if (body === '') {res.render('logged-In/home'),{}}
//     let hero = JSON.parse(body);
//     console.log(hero);
//     if (hero.results) {   //if your find has many results, the results key exists
//         res.render('logged-In/heros', {
//             hero: hero.results[0]            //just pick the first one
//         })
//     } else {
//         res.render('logged-In/heros', {    //otherwise give the single result
//             hero: hero
//         })
//     }
// })
// }
// }
