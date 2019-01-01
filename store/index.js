import { Recipe, pancake, burger, burrito } from './Recipe.js';

export const state = () => {
  return {
    shoppingCart: [],
    recipes: [pancake, burger, burrito],
    recipeObj: {
      0: 0,
      1: 1,
      2: 2
    }
  };
};

export const mutations = {
  addToCart(state, recipe) {
    state.shoppingCart.push(recipe);
  }
};

export const getters = {
  recipes: state => state.recipes
};
