const mongoose = require('mongoose');

const RecipeTagSchema = new mongoose.Schema({
  recipeId: Number,
  tagId: Number
});

const RecipeTag = mongoose.model('RecipeTag', RecipeTagSchema);

module.exports = RecipeTag;
