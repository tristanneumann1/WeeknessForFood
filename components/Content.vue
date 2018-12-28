<template>
  <div class="content">
    <ul class="recipe-list">
      <Recipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </ul>
    <div class="shopping-cart">
      {{ shoppingCart }}
    </div>
  </div>
</template>

<script>
import Recipe from './Recipe.vue';

export default {
  components: {
    Recipe
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
    shoppingCart() {
      return this.$store.state.shoppingCart;
    }
  }
};
</script>

<style>
.content {
  display: flex;
  width: 100%;
}

.recipe-list {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
}

.shopping-cart {
  width: 30%;
  margin: 0.5em;
  background-color: yellow;
  box-shadow: 2px 2px 1px grey;
}
</style>
