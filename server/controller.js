const { TagModel, IngredientModel } = require('../db/Models');

function post(err, data) {
  if (err) {
    this.res.send(err);
  } else {
    this.res.status(201).send(data);
  }
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
  }
};
