<template>
  <ul class="content">
    <Recipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
  </ul>
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
    }
  }
};
</script>

<style>
.content {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
}
</style>
