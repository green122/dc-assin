import { useEffect, useState } from "react";
import { getRecipesList } from "../../api/server";

export default function useGetRecipesList() {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    setLoading(true);

    getRecipesList().then((recipesList) => {
      setLoading(false);
      setRecipes(recipesList);
    });

    // cause it's a fake request we don't need to put this dependency in a array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: errors
  return {
    loading,
    recipes,
  };
}
