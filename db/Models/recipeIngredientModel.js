const mongoose = require('mongoose');

const RecipeIngredientSchema = new mongoose.Schema({
  recipeId: String,
  ingredientId: String,
  unit: String,
  quantity: Number
});

const RecipeIngredient = mongoose.model(
  'RecipeIngredient',
  RecipeIngredientSchema
);

module.exports = RecipeIngredient;
