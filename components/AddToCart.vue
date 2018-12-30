<template>
  <div class="add-to-cart">
    <div class="person-selector">
      <a class="arrow-button">&#x25B2;</a>
      <span>4</span>
      <a class="arrow-button">&#x25BC;</a>
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
  methods: {
    addToCart() {
      this.$store.commit('addToCart', Object.assign({}, this.recipe));
    }
  }
};
</script>

<style>
.add-to-cart {
  display: flex;
}

.arrow-button {
  color: black;
  font-size: 1.5em;
  margin: -0.5em;
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
