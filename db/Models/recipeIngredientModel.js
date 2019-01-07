const mongoose = require('mongoose');

const RecipeIngredientSchema = new mongoose.Schema({
  recipeId: Number,
  ingredientId: Number,
  quantity: Number
});

const RecipeIngredient = mongoose.model(
  'RecipeIngredient',
  RecipeIngredientSchema
);

module.exports = RecipeIngredient;
