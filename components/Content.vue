<template>
  <ul class="content">
    <Recipe
      v-for="recipe in recipes"
      :key="recipe.id"
      :recipe="recipe"
    />
  </ul>
</template>

<script>
import Recipe from './Recipe.vue';

export default {
  components: {
    Recipe
  },
  data() {
    return {
      recipes: [
        {
          id: 1,
          name: 'first'
        },
        {
          id: 2,
          name: 'second'
        },
        {
          id: 3,
          name: 'third'
        },
        0
      ]
    };
  }
};
</script>

<style>
</style>
