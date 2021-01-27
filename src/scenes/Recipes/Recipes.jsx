import RecipesDetails from "../../components/RecipeDetails/RecipeDetails";
import RecipesPicker from "../../components/RecipesPicker/RecipesPicker";

const Recipes = () => {
  return (
    <div>
      <RecipesPicker />
      <RecipesDetails />
    </div>
  );
};

export default Recipes;
