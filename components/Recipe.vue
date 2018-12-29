<template>
  <li class="recipe">
    <ul class="recipe-inner">
      <div class="column-1">
        <img :src="recipe.img" :alt="recipe.name + ' pic'" class="recipe-img">
      </div>
      <div class="column-2">
        <span class="recipe-title">{{ recipe.name }}:</span>
        <span class="recipe-author">{{ recipe.author }}</span>
      </div>
      <ul class="column-3">
        <li v-for="tag in tags3(recipe)" :key="tag" class="tag">{{ tag }}</li>
      </ul>
      <div class="descriptors">
        <div class="prep-time">
          {{ (recipe.over1H)? '&gt;60min' : '&lt;60min' }}
        </div>
        <div class="price">
          <fa v-for="n in recipe.price" :key="n" :icon="faDollarSign" />
        </div>
      </div>
    </ul>
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
  },
  methods: {
    tags3(recipe) {
      return recipe.tags.slice(0, 3);
    }
  }
};
</script>

<style>
.recipe {
  width: 50%;
}

.recipe-inner {
  display: flex;
  height: 8em;
  margin: 1em;
  padding: 0;
  background-color: rgb(163, 225, 280);
  box-shadow: 3px 3px 2px grey;
}

.column-1 {
  display: block;
  flex: 2;
  height: 100%;
  position: relative;
  margin: 0.5em;
}

.recipe-img {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: auto;
  position: absolute;
  box-shadow: 2px 2px 1px grey;
}

.column-2 {
  display: flex;
  flex: 2;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  font-size: 1.5em;
}

.recipe-title {
  text-decoration: underline;
  font-weight: 700;
  color: red;
}

.recipe-author {
  font-style: italic;
  font-size: 0.8em;
}

.column-3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tag {
  border: 1px solid black;
  margin: 3px;
  padding: 2px;
}
.descriptors {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0.5em;
}
</style>
