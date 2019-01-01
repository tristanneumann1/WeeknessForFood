<template>
  <div class="content">
    <ul class="recipe-list">
      <Recipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </ul>
    <div class="shopping">
      <Shopping-list />
      <Shopping-cart />
    </div>
  </div>
</template>

<script>
import Recipe from './Recipe.vue';
import ShoppingList from './ShoppingList.vue';
import ShoppingCart from './ShoppingCart.vue';

export default {
  components: {
    Recipe,
    ShoppingList,
    ShoppingCart
  },
  computed: {
    recipes() {
      return this.$store.getters.recipes;
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
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
}

.shopping {
  width: 30%;
}
</style>
