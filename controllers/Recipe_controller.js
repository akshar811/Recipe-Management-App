const Recipe = require("../models/Recipe_model");
const wrapAsyc = require("../utils/wrapAsyc");

const createRecipe = wrapAsyc(async (req, res) => {
  const { title, ingredients, instructions, cuisineType } = req.body;
  const data = await Recipe.create(req.body);
  res.status(200).json({ message: "Recipe created successfully", Datas: data });
});

const AllRecipe = wrapAsyc(async (req, res) => {
  const recipes = await Recipe.find();
  res.status(200).json({ message: "All Recipe", Data: recipes });
});

const SingleRecipe = wrapAsyc(async (req, res) => {

    const recipe = await Recipe.findById(req.params.id).populate('author', 'username');
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json(recipe);

});

const UpdateRecipe = wrapAsyc(async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ message: "Recipe Updated", Data: recipe });
});

const DeleteRecipe = wrapAsyc(async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipe.findByIdAndDelete(id);
  res.status(200).json({ message: "Recipe Deleted", Data: recipe });
});

module.exports = { createRecipe, AllRecipe, UpdateRecipe, DeleteRecipe , SingleRecipe };
