<template>
  <div class="add-recipe-container">
    <form>
      <div class="recipe">
        <div class="recipe-outer">
          <div class="recipe-inner">
            <div class="column-1">
              <!-- <img :src="recipe.img" :alt="recipe.name + ' pic'" class="recipe-img" @click="toggleDropDown"> -->
            </div>
            <div class="column-2">
              <input class="recipe-title" placeholder="Name of Dish">
              <input class="recipe-author" placeholder="Your Name">
            </div>
            <ul class="column-3">
              <li v-for="tag in ['  tag1', '  tag2', '  tag3']" :key="tag" class="li-tag">
                <input :placeholder="tag" class="tag">
              </li>
            </ul>
            <div class="column-4">
              <div class="prep-time">
                Time to make:
                <toggle-switch />
              </div>
              <span>Recipe is For:</span> 
              <add-to-cart :recipe="recipe" :for-persons-state="{ forPersons: 4 }"/>
            </div>
          </div>
          <div class="drop-down-container">
            <div class="row-1">
              <span>Ingredients:</span>
              <ul class="ingredient-list">
                <li v-for="ingredient in [{name: 'first'}]" :key="ingredient.name" class="ingredient">
                  <input class="ingredient-name" placeholder="item">
                  <input class="ingredient-quantity" placeholder="quantity">
                </li>
              </ul>
              <span>Recipe:</span>
              <input class="instructions" placeholder="Input Instructions Here">
            </div>
            <div>
              <h3>Chef's notes:</h3>
              <br>
              <input placeholder="Chef's notes here">
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ToggleSwitch from './ToggleSwitch.vue';
import AddToCart from '../AddToCart.vue';
export default {
  components: {
    ToggleSwitch,
    AddToCart
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
  margin: 1em;
  margin-bottom: 0;
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
  margin: 0.5em;
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

.ingredient-list {
  flex: 1;
  padding-left: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
}

.ingredient {
  display: flex;
  width: 100%;
  text-align: left;
}

.ingredient-quantity {
  margin-left: 1em;
}

.instructions {
  flex: 1;
  white-space: pre;
  text-align: left;
}
</style>
