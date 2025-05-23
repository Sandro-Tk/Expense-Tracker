import { createGlobalStyle } from "styled-components";
import "@fontsource/inter";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-positive: green;
    --color-negative: red;
    --font-size-description: 20px;
    --color-1:#f4eeff;
    --color-2:#dcd6f7;
    --color-3:#a6b1e1;
    --color-4:#424874;

}
 
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
