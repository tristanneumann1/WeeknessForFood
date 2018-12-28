<template>
  <li>
    {{ recipe.name }}
  </li>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      default() {
        return {
          id: -1,
          name: 'Recipe Missing'
        };
      }
    }
  }
};
</script>

<style>
</style>
