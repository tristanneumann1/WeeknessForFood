export default shoppingList => {
  const ingredients = [];
  const ingredientsObj = {};
  shoppingList.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
      if (ingredientsObj[ingredient.name] !== undefined) {
        ingredients[ingredientsObj[ingredient.name]].quantity +=
          ingredient.quantity;
      } else {
        ingredientsObj[ingredient.name] = ingredients.length;
        ingredients.push({ ...ingredient });
      }
    });
  });
  return ingredients;
};
