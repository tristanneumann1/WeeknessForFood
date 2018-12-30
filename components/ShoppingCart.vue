<template>
  <div class="shopping-cart">
    <span class="shopping-list-title">
      Your Shopping List
    </span>
    <span>{{ shoppingCart }}</span>
  </div>  
</template>

<script>
export default {
  computed: {
    shoppingCart() {
      return this.$store.state.shoppingCart;
    }
  }
};
</script>

<style>
.shopping-cart {
  width: 30%;
  margin: 0.5em;
  background-color: white;
  box-shadow: 2px 2px 1px grey;
}

.shopping-list-title {
  font-family: 'Permanent Marker', cursive;
  font-size: 1.5em;
}
</style>
