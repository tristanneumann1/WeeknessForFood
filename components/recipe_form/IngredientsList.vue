<template>
  <ul class="ingredient-list">
    <li v-for="ingredient in ingredients" :key="ingredient.name" class="ingredient">
      <div>{{ ingredient.name }}</div>
      <div>{{ ingredient.quantity }}</div>
      <div>{{ ingredient.unit }}</div>
    </li>
    <li class="ingredient">
      <input v-model="name" class="ingredient-name" placeholder="item">
      <input v-model="quantity" class="ingredient-quantity" placeholder="quantity">
      <input v-model="unit" class="ingredient-unit" placeholder="unit">
      <button @click.prevent="addIngredient">+</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      ingredients: [],
      name: '',
      quantity: '',
      unit: ''
    };
  },
  watch: {
    ingredients(val) {
      this.$emit('input', val);
    }
  },
  methods: {
    addIngredient() {
      const { name, quantity, unit } = this;
      this.ingredients.push({ name, quantity, unit });
      this.name = '';
      this.quantity = '';
      this.unit = '';
    }
  }
};
</script>

<style>
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

.ingredient-unit {
  margin-left: 1em;
}
</style>
