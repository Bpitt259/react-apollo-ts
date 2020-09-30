import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
// eslint-disable-next-line import/no-unresolved
import {} from 'styled-components/cssprop';

const ThemeProvider = ({ children }): React.ReactElement => (
  <Provider theme={theme}>
    <GlobalStyles />
    {children}
  </Provider>
);

export default ThemeProvider;
