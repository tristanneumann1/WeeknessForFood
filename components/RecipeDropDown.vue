<template>
  <div class="drop-down-container">
    {{ recipe.instructions }}
  </div>
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
.drop-down-container {
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 1em;
  margin-top: 0;
  padding: 0;
  background-color: rgb(163, 225, 280);
  box-shadow: 3px 3px 2px grey;
  transform-origin: top;
  transition: transform 0.4s ease-in-out;
  overflow: hidden;
}
</style>
