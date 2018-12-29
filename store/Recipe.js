class Recipe {
  constructor({ name, ingredients, img, over1H, price, instructions, tags }) {
    this.name = name || '';
    this.ingredients = ingredients || {};
    this.img = img || '';
    this.over1H = over1H || false;
    this.price = price || 1;
    this.instructions = instructions || '';
    this.tags = tags || [];
  }
}

export default Recipe;
