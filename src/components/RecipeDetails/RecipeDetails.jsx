import useGetRecipe from "./useGetRecipe";
import { Descriptions, List } from "antd";

const RecipesDetails = ({ recipeId }) => {
  const { recipe } = useGetRecipe(recipeId);

  if (!recipe) return null;
  console.log(recipe);
  return (
    <Descriptions layout="vertical" title="Recipe Details">
      <Descriptions.Item label="Recipe name">{recipe.name}</Descriptions.Item>
      <Descriptions.Item label="Ingredients">
        <List
          size="large"
          dataSource={recipe.ingredients}
          renderItem={(ingredient) => <List.Item>{ingredient.name}</List.Item>}
        />
      </Descriptions.Item>
      <Descriptions.Item label="Steps">
        <List
          size="large"
          dataSource={recipe.steps}
          renderItem={(step) => <List.Item>{step.name}</List.Item>}
        />
      </Descriptions.Item>
    </Descriptions>
  );
};

export default RecipesDetails;
