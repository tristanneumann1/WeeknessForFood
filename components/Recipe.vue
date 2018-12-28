<template>
  <li class="recipe">
    <div class="image-container">
      <img :src="recipe.img" :alt="recipe.name + ' pic'" class="recipe-img">
    </div>
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
.recipe {
  display: flex;
  height: 8em;
  margin: 1em;
  background-color: rgb(163, 225, 280);
  box-shadow: 3px 3px 2px grey;
}

.recipe-img {
  height: 100%;
  width: auto;
  overflow: hidden;
  box-shadow: 2px 2px 1px grey;
}

.image-container {
  display: flex;
  height: 125px;
  width: 125px;
  margin: 0.5em;
}
</style>
