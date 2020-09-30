import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    }

  body {
    margin: 0;
    padding: 0;
    font-family: 'droid-sans, Helvetica, Arial, sans-serif';
  }

  textarea {
    resize: none;
    font-family: 'droid-sans, Helvetica, Arial, sans-serif';
  }
`;

export default GlobalStyles;
