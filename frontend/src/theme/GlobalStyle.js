import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    min-height: 100%;
  }
  *{
    box-sizing:border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }
`;

export default GlobalStyle;
