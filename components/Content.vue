<template>
  <div class="content">
    <ul class="recipe-list">
      <Recipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </ul>
    <Shopping-cart />
  </div>
</template>

<script>
import Recipe from './Recipe.vue';
import ShoppingCart from './ShoppingCart.vue';

export default {
  components: {
    Recipe,
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
</style>
