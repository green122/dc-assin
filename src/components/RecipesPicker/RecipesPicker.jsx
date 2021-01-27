import useGetRecipesList from "./useGetRecipesList";

const RecipesPicker = ({ selectRecipe }) => {
  const { loading, recipes } = useGetRecipesList();

  return (
    <div>
      {recipes &&
        recipes.map((recipe) => (
          <div key={recipe.id} onClick={() => selectRecipe(recipe.id)}>
            {recipe.name}
          </div>
        ))}
    </div>
  );
};

export default RecipesPicker;
