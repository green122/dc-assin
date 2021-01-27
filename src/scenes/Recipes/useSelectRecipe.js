import { useState } from "react";

export default function useSelectRecipe() {
  const [recipeId, setRecipeId] = useState(null);

  return { recipeId, setRecipeId };
}
