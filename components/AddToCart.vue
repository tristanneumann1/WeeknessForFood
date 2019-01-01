<template>
  <div class="add-to-cart">
    <div class="person-selector">
      <a class="arrow-button" @click="forPersonsState.addPerson">&#x25B2;</a>
      <span>{{ forPersonsState.forPersons }}</span>
      <a class="arrow-button" @click="forPersonsState.removePerson">&#x25BC;</a>
    </div>
    <button @click="addToCart">Make it!</button>
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
          name: 'Recipe missing'
        };
      }
    },
    forPersonsState: {
      type: Object,
      default() {
        return { forPersons: 4 };
      }
    }
  },
  methods: {
    addToCart() {
      const recipeCopy = JSON.parse(JSON.stringify(this.recipe));
      recipeCopy.ingredients = recipeCopy.ingredients.map(ingredient => {
        ingredient.quantity *= this.forPersonsState.forPersons / 4;
        return ingredient;
      });
      this.$store.commit('addToCart', {
        recipe: recipeCopy,
        forPersons: this.forPersonsState.forPersons
      });
    }
  }
};
</script>

<style>
.add-to-cart {
  display: flex;
}

.arrow-button {
  margin: -0.5em;
  color: black;
  cursor: pointer;
  font-size: 1.5em;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
}

.person-selector {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.person-selector input {
  width: auto;
  max-width: 2em;
}
</style>
