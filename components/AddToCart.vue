<template>
  <div class="add-to-cart">
    <div class="person-selector">
      <a class="arrow-button" @click="addPerson">&#x25B2;</a>
      <span>{{ forPersons }}</span>
      <a class="arrow-button" @click="removePerson">&#x25BC;</a>
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
    }
  },
  data() {
    return {
      forPersons: 4
    };
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', Object.assign({}, this.recipe));
    },
    addPerson() {
      if (this.forPersons < 20) {
        this.forPersons++;
      }
    },
    removePerson() {
      if (this.forPersons > 1) {
        this.forPersons--;
      }
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
