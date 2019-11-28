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
        res.render('logged-In/heros', {
            body: body,
            hero: hero
        })
    })
}

// [0]["results"][0]

// {
//     "response": "success",
//     "results-for": "batman",
//     "results": [
//       {
//         "id": "69",
//         "name": "Batman",
//         "powerstats": {
//           "intelligence": "81",
//           "strength": "40",
//           "speed": "29",
//           "durability": "55",
//           "power": "63",
//           "combat": "90"
//         },