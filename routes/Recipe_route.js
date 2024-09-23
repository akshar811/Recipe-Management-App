const { Router } = require("express");
const { createRecipe, AllRecipe, UpdateRecipe, DeleteRecipe, SingleRecipe } = require("../controllers/Recipe_controller");
const { Auth } = require("../middleware/Auth");

const RecipeRoute = Router();

RecipeRoute.post("/create",Auth,createRecipe);

RecipeRoute.get("/AllRecipe",Auth,AllRecipe);

RecipeRoute.get("/SingleRecipe/:id",Auth,SingleRecipe);

RecipeRoute.patch("/UpdateRecipe/:id",Auth,UpdateRecipe);

RecipeRoute.delete("/DeleteRecipe/:id",Auth,DeleteRecipe);

module.exports = RecipeRoute;
