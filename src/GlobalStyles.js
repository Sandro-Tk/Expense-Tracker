import { createGlobalStyle } from "styled-components";
import "@fontsource/inter";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif;
    background-color: #f4f6f8;
    color: #333;
  }

  button, input, textarea {
font-family: inherit;
  }
`;

export default GlobalStyle;
