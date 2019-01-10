<template>
  <div class="drop-down-container">
    <div class="row-1">
      <ul class="ingredient-list">
        <li v-for="ingredient in recipe.ingredients" :key="ingredient.name" class="ingredient">
          <span class="ingredient-name">
            {{ capitaliseName(ingredient.name) + ': ' }}
          </span>
          <span class="ingredient-quantity">
            {{ forPersonsIngredientQuantity(ingredient.quantity, forPersons) + ingredient.unit }}
          </span>
        </li>
      </ul>
      <p class="instructions">{{ recipe.instructions }}</p>
    </div>
    <div>
      <h5>Chef's notes:</h5>
      <br>
      <p>
        {{ recipe.chefsNote }}
      </p>
    </div>
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
    },
    forPersons: {
      type: Number,
      default() {
        return 4;
      }
    }
  },
  methods: {
    forPersonsIngredientQuantity(quantity, forPersons) {
      return (
        Math.floor((100 * quantity * forPersons) / this.recipe.people) / 100
      );
    },
    capitaliseName(name) {
      name = name.trim();
      return name[0].toUpperCase() + name.slice(1);
    }
  }
};
</script>

<style scoped>
.drop-down-container {
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

/* .ingredient-quantity {
  flex: 1;
}*/

.ingredient-quantity {
  margin-left: 1em;
}

.instructions {
  flex: 1;
  white-space: pre;
  text-align: left;
}
</style>
