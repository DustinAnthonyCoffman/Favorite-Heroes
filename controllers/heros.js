const User = require('../models/user');
var request = require('request');
const rootURL = 'https://superheroapi.com/api/'; 


module.exports = {
    showHero
}


function showHero(req,res) {
    // console.log(req.body.name);
    request(`${rootURL}${process.env.SUPERHERO_TOKEN}/search/${req.body.name}`, 
    function(err, response, body) {
        // console.log('body:', body); 
        let hero = JSON.parse(body);
        console.log(Object.keys(hero));
        res.render('logged-In/heros', {
            body: body,
            hero: hero
        })
    })
}

