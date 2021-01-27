import { useEffect, useState } from "react";
import fixture from "./fixture";

export default function useGetRecipesList() {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    setLoading(true);
    new Promise((resolve) => {
      setTimeout(resolve, 3000);
    }).then(() => {
      setLoading(false);
      setRecipes(fixture);
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
