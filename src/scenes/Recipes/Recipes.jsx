import RecipesDetails from "../../components/RecipeDetails/RecipeDetails";
import RecipesPicker from "../../components/RecipesPicker/RecipesPicker";
import useSelectRecipe from "./useSelectRecipe";

import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

const Recipes = () => {
  const { recipeId, setRecipeId } = useSelectRecipe();

  return (
    <Layout>
      <Sider>
        <RecipesPicker selectRecipe={setRecipeId} />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>{recipeId && <RecipesDetails recipeId={recipeId} />}</Content>
      </Layout>
    </Layout>
  );
};

export default Recipes;
