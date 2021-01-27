import RecipesDetails from "../../components/RecipeDetails/RecipeDetails";
import RecipesPicker from "../../components/RecipesPicker/RecipesPicker";
import useSelectRecipe from "./useSelectRecipe";

import { Layout } from "antd";
import { theme } from "../../constants/layout";
import styled, { ThemeProvider } from "styled-components";

const { Sider, Content } = Layout;

const StyledSider = styled(Sider)`
  background-color: ${(props) => props.theme.colors.backgroundSider};
`;

const StyledContent = styled(Content)`
  background-color: ${(props) => props.theme.colors.backgroundMain};
  padding: ${(props) => props.theme.sizes.bigGutter}px;
`;

const Container = styled(Layout)`
  height: 100vh;
  width: 90%;
  margin: auto;
`;

const Recipies = () => {
  const { recipeId, setRecipeId } = useSelectRecipe();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StyledSider>
          <RecipesPicker selectRecipe={setRecipeId} />
        </StyledSider>
        <Layout>
          <StyledContent>
            {recipeId && <RecipesDetails recipeId={recipeId} />}
          </StyledContent>
        </Layout>
      </Container>
    </ThemeProvider>
  );
};

export default Recipies;
