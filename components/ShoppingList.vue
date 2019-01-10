<template>
  <div class="shopping">
    <span class="shopping-title">
      My Shopping List
    </span>
    <ul>
      <li v-for="ingredient in calculateIngredients" :key="ingredient.name">{{ ingredient.name }} : {{ rounded(ingredient.quantity) + ' ' + ingredient.unit }}</li>
    </ul>
  </div>  
</template>

<script>
import calculateIngredients from './helpers/calculateIngredients.js';

export default {
  computed: {
    shoppingList() {
      return this.$store.state.shoppingList;
    },
    calculateIngredients() {
      return calculateIngredients(this.$store.state.shoppingList);
    }
  },
  methods: {
    rounded(value) {
      return Math.floor(100 * value) / 100;
    }
  }
};
</script>

<style scoped>
.shopping {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  margin: 0.5em 0;
  background-color: white;
  box-shadow: 2px 2px 1px grey;
  font-family: 'Permanent Marker', cursive;
}

.shopping-title {
  font-size: 1.5em;
}

.shopping ul {
  margin-top: 1em;
  list-style: none;
  text-align: left;
}
</style>
