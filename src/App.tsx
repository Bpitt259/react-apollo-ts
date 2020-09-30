import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloProvider from './ApolloProvider';
import ThemeProvider from './styles/ThemeProvider';
import AppHeader from './components/AppHeader';

const Home = lazy(() => import('./components/Home'));

const MainContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 9fr auto;
  grid-template-rows: 50px 9fr auto;
  height: 100vh;
  grid-template-areas: 'header' 'main';
`;

const MainWrapper = styled.div`
  grid-area: main;
  grid-column: 1 / 4;
`;

const App = () => {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <MainContentWrapper>
          <Router>
            <AppHeader />
            <MainWrapper>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
              </Suspense>
            </MainWrapper>
          </Router>
        </MainContentWrapper>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
