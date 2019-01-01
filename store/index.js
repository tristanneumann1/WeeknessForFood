import { Recipe, pancake, burger, burrito } from './Recipe.js';

export const state = () => {
  return {
    shoppingList: [],
    shoppingListCounter: 0,
    recipes: [pancake, burger, burrito],
    recipeObj: {
      0: 0,
      1: 1,
      2: 2
    }
  };
};

export const mutations = {
  addToCart(state, { recipe, forPersons }) {
    state.shoppingList.push({
      id: this.shoppingListCounter,
      forPersons,
      recipe
    });
    state.shoppingListCounter++;
  }
};

export const getters = {
  recipes: state => state.recipes
};
