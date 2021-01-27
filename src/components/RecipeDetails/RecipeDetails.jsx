import useGetRecipe from "./useGetRecipe";
import { Col, List, Row, Image, Typography, Spin } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const Header = styled(Row)`
  text-align: center;
`;

const ListHeader = styled.div`
  font-size: ${(props) => props.theme.fontSizes.big};
`;

const ListsContainer = styled(Row)`
  margin-top: ${(props) => props.theme.sizes.bigGutter}px;
`;

const SubHeader = styled(Text)`
  margin-right: ${(props) => props.theme.sizes.smallGutter}px;
`;

const RecipesDetails = ({ recipeId }) => {
  const { loading, recipe } = useGetRecipe(recipeId);

  if (!recipe) return null;

  if (loading) return <Spin size="large" />;

  return (
    <>
      <Header>
        <Col span={24}>
          <Text strong>Recipe Details</Text>
        </Col>
      </Header>
      <Row>
        <Col span={24}>
          <SubHeader strong>Recipe</SubHeader>
          {recipe.name}
        </Col>
      </Row>
      <ListsContainer gutter={10}>
        <Col xs={24} xl={10}>
          <List
            size="large"
            dataSource={recipe.ingredients}
            header={<ListHeader>Ingredients</ListHeader>}
            renderItem={(ingredient) => (
              <List.Item>{ingredient.name}</List.Item>
            )}
          />
        </Col>
        <Col xs={24} xl={10}>
          <List
            size="large"
            dataSource={recipe.steps}
            header={<ListHeader>Steps</ListHeader>}
            renderItem={(step) => <List.Item>{step.name}</List.Item>}
          />
        </Col>
      </ListsContainer>
      <Row>
        <Col span={24}>
          <Image.PreviewGroup>
            {recipe.images &&
              recipe.images.map((image, index) => (
                <Image key={index} width={200} src={image} />
              ))}
          </Image.PreviewGroup>
        </Col>
      </Row>
    </>
  );
};

export default RecipesDetails;
