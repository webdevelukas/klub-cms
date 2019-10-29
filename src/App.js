// Imported dependencies / functions
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import defaultTheme from "./themes/default";
import GlobalStyles from "./GlobalStyles";

// Imported pages
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import ArticlesPage from "./pages/ArticlesPage";
import NewArticlePage from "./pages/NewArticlePage";
import EditArticlePage from "./pages/EditArticlePage";
import SubmitPage from "./pages/SubmitPage";

// Imported data
import { paths } from "./lib/paths";

const StyledApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <StyledApp>
        <Router>
          <Route exact path={paths.home} component={ArticlesPage} />
          <Route exact path={paths.articlesPage} component={ArticlesPage} />
          <Route exact path={paths.newArticlePage} component={NewArticlePage} />
          <Route exact path={paths.loginPage} component={LoginPage} />
          <Route exact path={paths.submitPage} component={SubmitPage} />
          <Route exact path={paths.errorPage} component={ErrorPage} />
          <Route
            path={`${paths.editArticlePage}/:articleId`}
            component={EditArticlePage}
          />
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
