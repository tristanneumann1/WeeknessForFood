<template>
  <div class="add-recipe-container">
    <form @submit="addRecipe">
      <div class="recipe">
        <div class="recipe-outer">
          <div class="recipe-inner">
            <div class="column-1">
              <!-- <img :src="recipe.img" :alt="recipe.name + ' pic'" class="recipe-img" @click="toggleDropDown"> -->
            </div>
            <div class="column-2">
              <input v-model="title" class="recipe-title" placeholder="Name of Dish">
              <input v-model="author" class="recipe-author" placeholder="Your Name">
            </div>
            <ul class="column-3">
              <li v-for="tag in ['tag1', 'tag2', 'tag3']" :key="tag" class="li-tag">
                <input :v-model="tag" :placeholder="'  ' + tag" class="tag">
              </li>
            </ul>
            <div class="column-4">
              <div class="prep-time">
                Time to make:
                <toggle-switch v-model="over1H"/>
              </div>
              <span>Recipe is For:</span> 
              <add-to-cart :recipe="recipe" :for-persons-state="{ forPersons, addPerson, removePerson }"/>
            </div>
          </div>
          <div class="drop-down-container">
            <div class="row-1">
              <span>Ingredients:</span>
              <ingredients-list v-model="ingredients"/>
              <span>Recipe:</span>
              <textarea v-model="instructions" class="instructions" placeholder="Input Instructions Here"/>
            </div>
            <div class="row-2">
              <h3>Chef's notes:</h3>
              <br>
              <textarea v-model="chefsNotes" placeholder="Chef's notes here"/>
            </div>
          </div>
        </div>
        <button type="submit">Add Recipe</button>
      </div>
    </form>
  </div>
</template>

<script>
import ToggleSwitch from './ToggleSwitch.vue';
import AddToCart from '../AddToCart.vue';
import IngredientsList from './IngredientsList.vue';
export default {
  components: {
    ToggleSwitch,
    AddToCart,
    IngredientsList
  },
  data() {
    return {
      recipe: {},
      forPersons: 4,
      title: '',
      author: '',
      tag1: '',
      tag2: '',
      tag3: '',
      over1H: true,
      ingredients: [],
      instructions: '',
      chefsNotes: ''
    };
  },
  methods: {
    addPerson() {
      if (this.forPersons < 20) {
        this.forPersons++;
      }
    },
    removePerson() {
      if (this.forPersons > 1) {
        this.forPersons--;
      }
    },
    addRecipe() {}
  }
};
</script>

<style scoped>
.add-recipe-container {
  width: 70%;
}

.recipe {
  width: 100%;
}

.recipe-outer {
  display: flex;
  flex-direction: column;
  margin: 1em 0 0 1em;
  background-color: rgb(163, 225, 280);
  box-shadow: 3px 3px 2px grey;
}

.recipe-inner {
  display: flex;
  height: 8em;
  margin: 0.5em;
  padding: 0;
}

.column-1 {
  display: block;
  flex: 2;
  height: 100%;
  position: relative;
  padding: 0.5em;
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
  padding: 0 0.5em;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  font-size: 1.5em;
}

.recipe-title {
  margin-bottom: 0.5em;
  text-decoration: underline;
  font-weight: 700;
  color: red;
}

.recipe-author {
  font-style: italic;
  font-size: 0.8em;
  margin-right: 5em;
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

.li-tag {
  position: relative;
  margin: 3px;
  padding: 2px;
  border: 1px solid black;
}

.column-4 {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.drop-down-container {
  display: flex;
  flex-direction: column;
  margin: 1em;
  margin-top: 0;
  padding: 0;
  overflow: hidden;
}

.row-1 {
  display: flex;
}

.instructions {
  flex: 1;
  white-space: pre;
  text-align: left;
}
</style>
