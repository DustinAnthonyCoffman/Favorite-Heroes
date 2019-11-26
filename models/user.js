var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const powerstats = new Schema({
    intelligence: String,
    strength: String,
    speed: String,
    durability: String,
    power: String,
    combat: String
})

const biography = new Schema ({
    "full-name": String,
    aliases: [String],
    "place-of-birth": String,
    "first-appearance": String,
    publisher: String,
    alignment: String
})

const appearance = new Schema ({
    gender: String,
    race: String,
    height: [String],
    weight: [String],
    "eye-color": String,
    "hair-color": String
})

const work = new Schema ({
    occupation: String,
    base: String
  })

const connections = new Schema ({
  "group-affiliation": String,
  relatives: String
})

const superHeroSchema = new Schema({
    name: {
        type: String
    },
    powerstats: powerstats,

    biography: biography,

    appearance: appearance,

    work: work,

    connections: connections,

    image: String

  });


const userSchema = new Schema({
    name: {
        type: String
    },

    email: String,

    collection: {
       
        superHero: superHeroSchema

    },

    googleId: String
}, {

    timestamps: true

  });




module.exports = mongoose.model('User', userSchema); 