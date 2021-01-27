import { useEffect, useState } from "react";
import { getRecipeById } from "../../api/server";

export default function useGetRecipe(id) {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    setLoading(true);

    getRecipeById(id).then((recipeDetails) => {
      setLoading(false);
      setRecipe(recipeDetails);
    });
  }, [id]);

  // TODO: errors
  return {
    loading,
    recipe,
  };
}
