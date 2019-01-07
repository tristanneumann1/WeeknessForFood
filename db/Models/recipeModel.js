const mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
  name: String,
  people: Number,
  over1H: Boolean,
  img: String,
  author: String,
  instructions: String,
  chefsNotes: String
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
