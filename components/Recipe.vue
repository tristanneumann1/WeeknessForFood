<template>
  <li class="recipe">
    <div class="image-container">
      <img :src="recipe.img" :alt="recipe.name + ' pic'" class="recipe-img">
    </div>
    {{ recipe.name }}
    {{ recipe.ingredients.eggs && recipe.ingredients.eggs.quantity }}
    <button @click="() => $store.commit('addToCart', recipe.ingredients.eggs)"> Add Eggs </button>
    <span>{{ eggs }}</span>
    <div class="descriptors">
      <div class="prep-time">
        <fa :icon="faTime" />
        <span>{{ recipe.time }} min</span>
      </div>
      <div class="price">
        <fa v-for="n in recipe.price" :key="n" :icon="faDollarSign" />
      </div>
    </div>
  </li>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
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
  },
  data() {
    return {
      eggs: 0
    };
  },
  computed: {
    faTime() {
      return fas.faClock;
    },
    faDollarSign() {
      return fas.faDollarSign;
    }
  }
};
</script>

<style>
.recipe {
  display: flex;
  justify-content: space-between;
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

.descriptors {
  display: flex;
  flex-direction: column;
  margin: 0.5em;
}
</style>
