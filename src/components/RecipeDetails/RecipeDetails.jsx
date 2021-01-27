import useGetRecipe from "./useGetRecipe";

const RecipesDetails = ({ recipeId }) => {
  const { recipe } = useGetRecipe(recipeId);
  return <div></div>;
};

export default RecipesDetails;
