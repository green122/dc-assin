import useGetRecipesList from "./useGetRecipesList";
import { Menu } from "antd";
import { useCallback, useEffect, useState } from "react";

const RecipesPicker = ({ selectRecipe }) => {
  const { loading, recipes } = useGetRecipesList(selectRecipe);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const onSelect = useCallback(
    (id) => {
      setSelectedRecipe(id);
      selectRecipe(id);
    },
    [selectRecipe]
  );

  useEffect(() => {
    if (!recipes || !recipes.length) return;
    onSelect(recipes[0].id);
  }, [recipes, onSelect]);

  return (
    <Menu mode="inline" selectedKeys={[selectedRecipe]}>
      {recipes &&
        recipes.map((recipe) => (
          <Menu.Item
            tabIndex={-1}
            key={recipe.id}
            onClick={() => onSelect(recipe.id)}
          >
            {recipe.name}
          </Menu.Item>
        ))}
    </Menu>
  );
};

export default RecipesPicker;
