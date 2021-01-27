import recipes from "./fixture";

export const getRecipesList = () =>
  new Promise((resolve) => {
    setTimeout(resolve(recipes), 1000);
  });

export const getRecipeById = (id) => {
  const recipe = recipes.find((recipe) => recipe.id === id);
  return new Promise((resolve) => {
    setTimeout(resolve(recipe), 1000);
  });
};
