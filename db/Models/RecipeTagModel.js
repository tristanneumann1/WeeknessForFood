const mongoose = require('mongoose');

const RecipeTagSchema = new mongoose.Schema({
  recipeId: String,
  tagId: String
});

const RecipeTag = mongoose.model('RecipeTag', RecipeTagSchema);

module.exports = RecipeTag;
