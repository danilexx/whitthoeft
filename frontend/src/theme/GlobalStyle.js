import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    min-height: 100%;
  }
  html{
    font-size: 62.5%;
  }
  @media (max-width: 1080) {
    html {
      font-size: 58%;
    }
  }

  @media (max-width: 600px) {
    html{
      font-size: 50%;
    }
  }
  *{
    box-sizing:border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }
`;

export default GlobalStyle;
