const User = require('../models/user');
const request = require('request');
const rootURL = 'https://superheroapi.com/api/'; 


module.exports = {
    showHero,
    showRandom
}

 
 
function showRandom(req,res) {
    request(`${rootURL}${process.env.SUPERHERO_TOKEN}/${req.body.name}`,
    function(err, response, body) {
        let hero = JSON.parse(body);    
        res.render('logged-In/heros', {
            hero
        })
    })
}

function showHero(req,res) {
    if(!req.body){
        res.render('logged-In/home');
    } else {
    request(`${rootURL}${process.env.SUPERHERO_TOKEN}/search/${req.body.name}`, 
    function(err, response, body) {
        // if (body === '') {res.render('logged-In/home'),{}}
        let hero = JSON.parse(body);
        if (hero.results) {   //if your find has many results, the results key exists
            res.render('logged-In/heros', {
                hero: hero.results[0]            //just pick the first one
            })
        } else {
            res.render('logged-In/heros', {    //otherwise give the single result
                hero: hero
            })
        }
    })
}
}
       
   


