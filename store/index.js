import { Recipe, pancake, burger, burrito, hotCheetoCake } from './Recipe.js';

export const state = () => {
  return {
    pageDisplay: 1,
    shoppingList: [],
    shoppingListCounter: 0,
    recipes: [pancake, burger, burrito, hotCheetoCake],
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
  },
  changePage(state, newPage) {
    state.pageDisplay = newPage;
  }
};

export const getters = {
  recipes: state => state.recipes
};
