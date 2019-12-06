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
        let hero = JSON.parse(body);
        if (hero.results.length === 1) {
            res.render('loggedIn/heros', {
                hero: hero.results[0]

            })
        }
        let heroRound = Math.round(getRandom(0, hero.results.length))
        res.render('loggedIn/heros', {
            hero: hero.results[heroRound]
        })
    })
}

       
   


