const {
  TagModel,
  IngredientModel,
  RecipeModel,
  RecipeIngredientModel,
  RecipeTagModel
} = require('../db/Models');

function post(err, data) {
  if (err) {
    this.res.send(err);
  } else {
    this.res.status(201).send(data);
  }
}

function addIngredient(ingredientData) {
  if (!ingredientData) {
    ingredient = new IngredientModel(this.ingredient);
    ingredient.save();
  }
  const ingredientId = ingredientData ? ingredientData._id : ingredient._id;
  recipeIngredient = new RecipeIngredientModel({
    recipeId: this.recipeId,
    ingredientId,
    unit: this.recipeIngredient.unit,
    quantity: this.recipeIngredient.quantity
  });
  recipeIngredient.save();
}

function addTag(tagData) {
  if (!tagData) {
    tag = new TagModel(this.tag);
    tag.save();
  }
  const tagId = tagData ? tagData._id : tag._id;
  recipeTag = new RecipeTagModel({
    recipeId: this.recipeId,
    tagId
  });
  recipeTag.save();
}

function findOrAddIngredient(ingredientFull, recipeId) {
  let ingredient = (({ name }) => ({ name }))(ingredientFull);
  let recipeIngredient = (({ quantity, unit }) => ({ quantity, unit }))(
    ingredientFull
  );
  return IngredientModel.findOne(ingredient)
    .then(addIngredient.bind({ recipeId, ingredient, recipeIngredient }))
    .catch();
}

function findOrAddTag(tagName, recipeId) {
  const tag = { name: tagName };
  return TagModel.findOne(tag)
    .then(addTag.bind({ tag, recipeId }))
    .catch();
}

module.exports = {
  postTag(req, res) {
    const { name } = req.body;
    const tag = new TagModel({ name });
    tag.save(post.bind({ res }));
  },
  postIngredient(req, res) {
    const { name, unit } = req.body;
    const ingredient = new IngredientModel({ name, unit });
    ingredient.save(post.bind({ res }));
  },
  postRecipe(req, res) {
    const {
      name,
      people,
      over1H,
      img,
      author,
      instructions,
      chefsNotes,
      ingredients,
      tags
    } = req.body;
    // res.send(req.body);
    const recipe = new RecipeModel({
      name,
      people,
      over1H,
      img,
      author,
      instructions,
      chefsNotes
    });
    const saves = [];
    saves.push(recipe.save());
    saves.push(
      ...ingredients.map(ingredient =>
        findOrAddIngredient(ingredient, recipe._id)
      )
    );
    saves.push(...tags.map(tag => findOrAddTag(tag, recipe._id)));

    Promise.all(saves).then(saves => {
      res.send(saves[0]);
    });
  }
};
