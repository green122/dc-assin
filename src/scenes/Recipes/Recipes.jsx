import RecipesDetails from "../../components/RecipeDetails/RecipeDetails";
import RecipesPicker from "../../components/RecipesPicker/RecipesPicker";
import useSelectRecipe from "./useSelectRecipe";

const Recipes = () => {
  const { recipeId, setRecipeId } = useSelectRecipe();

  return (
    <div>
      <RecipesPicker selectRecipe={setRecipeId} />
      {recipeId && <RecipesDetails recipeId={recipeId} />}
    </div>
  );
};

export default Recipes;
