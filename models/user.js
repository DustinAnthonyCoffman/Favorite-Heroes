const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const powerstats = new Schema({
//     intelligence: String,
//     strength: String,
//     speed: String,
//     durability: String,
//     power: String,
//     combat: String
// })

// const biography = new Schema ({
//     "full-name": String,
//     aliases: String, //changed []
//     "place-of-birth": String,
//     "first-appearance": String,
//     publisher: String,
//     alignment: String
// })

// const appearance = new Schema ({
//     gender: String,
//     race: String,
//     height: String,  //changed []
//     weight: String, //changed []
//     "eye-color": String,
//     "hair-color": String
// })


// const connections = new Schema ({
  //   "group-affiliation": String,
  //   relatives: String
  // })
  
  // const superHeroSchema = new Schema({
    //     name: {
      //         type: String
      //     },
      //     powerstats: powerstats,
      
      //     biography: biography,
      
      //     appearance: appearance,
      
      //     work: work,
      
      //     connections: connections,
      
      //     // image: String  
      
      //   });
      


const superHeroSchema = new Schema({
  name: String,
  image: String,
  occupation: String,
  base: String
})

const userSchema = new Schema({
    name: String,
    email: String,
    heros:[superHeroSchema], 
    googleId: String

}, {

    timestamps: true,
    lean: true

  });





module.exports = mongoose.model('User', userSchema); 