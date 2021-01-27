import useGetRecipesList from "./useGetRecipesList";
import { Menu } from "antd";
/* <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          > */

const RecipesPicker = ({ selectRecipe }) => {
  const { loading, recipes } = useGetRecipesList();

  return (
    <Menu mode="inline">
      {recipes &&
        recipes.map((recipe) => (
          <Menu.Item key={recipe.id} onClick={() => selectRecipe(recipe.id)}>
            {recipe.name}
          </Menu.Item>
        ))}
    </Menu>
  );
};

export default RecipesPicker;
