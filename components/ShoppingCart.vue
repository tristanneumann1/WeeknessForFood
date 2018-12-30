<template>
  <div class="shopping-cart">
    <span class="shopping-list-title">
      My Shopping List
    </span>
    <ul class="ingredients-list">
      <li v-for="ingredient in calculateIngredients" :key="ingredient.name">{{ ingredient.name }} : {{ ingredient.quantity + ' ' + ingredient.unit }}</li>
    </ul>
  </div>  
</template>

<script>
import calculateIngredients from './helpers/calculateIngredients.js';

export default {
  computed: {
    shoppingCart() {
      return this.$store.state.shoppingCart;
    },
    calculateIngredients() {
      return calculateIngredients(this.$store.state.shoppingCart);
    }
  }
};
</script>

<style>
.shopping-cart {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: fit-content;
  margin: 0.5em;
  background-color: white;
  box-shadow: 2px 2px 1px grey;
  font-family: 'Permanent Marker', cursive;
}

.shopping-list-title {
  font-size: 1.5em;
}

.ingredients-list {
  margin-top: 1em;
  list-style: none;
  text-align: left;
}
</style>
