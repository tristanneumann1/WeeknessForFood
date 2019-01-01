<template>
  <div class="shopping">
    <span class="shopping-title">
      Shopping Cart:
    </span>
    <ul>
      <li v-for="shoppingItem in $store.state.shoppingList" :key="shoppingItem.id">
        {{ shoppingItem.forPersons }}
        <span> : </span>
        {{ shoppingItem.recipe.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="./styles/shopping.css">
</style>
