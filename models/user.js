const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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