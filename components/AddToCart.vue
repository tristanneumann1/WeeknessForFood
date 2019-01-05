<template>
  <div class="add-to-cart">
    <div class="person-selector">
      <a class="arrow-button" @click="forPersonsState.addPerson">&#x25B2;</a>
      <span>{{ forPersonsState.forPersons }}</span>
      <a class="arrow-button" @click="forPersonsState.removePerson">&#x25BC;</a>
    </div>
    <a href="#" class="button1" @click="addToCart">
      <span>Make it!</span>
    </a>
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
        return {
          forPersons: 4,
          addPerson() {
            console.log('state missing');
          },
          removePerson() {
            console.log('state missing');
          }
        };
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

<style scoped>
.add-to-cart {
  display: flex;
  justify-content: space-around;
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

a.button1 {
  display: inline-flex;
  padding: 0.2em 0.2em;
  border: 0.1em solid #ff0000;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #ff0000;
  text-align: center;
  transition: all 0.2s;
  align-items: center;
}

a.button1 span {
  height: fit-content;
  font-size: 0.9em;
}

a.button1:hover {
  color: #ffffff;
  background-color: #ff0000;
}
</style>
