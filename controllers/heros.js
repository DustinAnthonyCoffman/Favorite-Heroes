const User = require('../models/user');
const request = require('request');
const rootURL = 'https://superheroapi.com/api/'; 


module.exports = {
    showHero,
    showRandom
}

function getRandom(min, max) { 
    return Math.random() * (max - min) + min; 
} 
 
let randomNum = getRandom(0,1); 
let randomRound = Math.round(randomNum); 
 
 
function showRandom(req,res) {
    request(`${rootURL}${process.env.SUPERHERO_TOKEN}/${req.body.name}`,
    function(err, response, body) {
        let hero = JSON.parse(body);    
        res.render('loggedIn/heros', {
            hero
        })
    })
}

function showHero(req,res) {
    request(`${rootURL}${process.env.SUPERHERO_TOKEN}/search/${req.body.name}`, 
    function(err, response, body) {
        // if (body === '') {res.render('loggedIn/home'),{}}
        let hero = JSON.parse(body);
        let heroRound = Math.round(getRandom(0, hero.result.length))
        res.render('loggedIn/heros', {
            hero: hero.results[heroRound]
        })
    })
}

//         if (hero.results.length > 1) {   //if your find has many results, the results key exists
//             res.render('loggedIn/heros', {
//                 hero: hero.results[0]            //just pick the first one
//             })
//         } else {
//             res.render('loggedIn/heros', {    //otherwise give the single result
//                 hero: hero
//             })
//         }
//     })
// }
       
   


