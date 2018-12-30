export default shoppingList => {
  const ingredients = {};
  shoppingList.forEach(shoppingItem => {
    shoppingItem.ingredients.forEach(ingredient => {
      if (ingredients[ingredient.name]) {
        ingredients[ingredient.name].quantity += ingredient.quantity;
      } else {
        ingredients[ingredient.name] = { ...ingredient };
      }
    });
  });
  return ingredients;
};
