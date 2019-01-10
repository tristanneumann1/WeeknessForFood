const router = require('express').Router();
const controller = require('../controller.js');

router.route('/tag').post(controller.postTag);

router.route('/ingredient').post(controller.postIngredient);

router.route('/recipe').post(controller.postRecipe);

module.exports = router;
