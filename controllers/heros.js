const User = require('../models/user');
const request = require('request');
const rootURL = 'https://superheroapi.com/api/'; 
const idUrl = 'https://superheroapi.com/api/'


module.exports = {
    showHero,
    showRandom
}

function showRandom(req,res) {
    request(`${idUrl}${process.env.SUPERHERO_TOKEN}/${req.body.name}`,
    function(err, response, body) {
        let hero = JSON.parse(body);    
        console.log(hero);
        res.redirect('logged-In/heros', {
            hero
        })
    })
}

function showHero(req,res) {
    request(`${rootURL}${process.env.SUPERHERO_TOKEN}/search/${req.body.name}`, 
    function(err, response, body) {
        // if (body === '') {res.render('logged-In/home'),{}}
        let hero = JSON.parse(body);
        // console.log(Object.keys(hero));
        res.render('logged-In/heros', {
            hero: hero
        })
    })
}



