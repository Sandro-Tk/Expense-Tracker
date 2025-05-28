import { createGlobalStyle } from "styled-components";
import "@fontsource/inter";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-positive: green;
    --color-negative: red;
    --color-1: #f4eeff;
    --color-2: #dcd6f7;
    --color-3: #a6b1e1;
    --color-4: #424874;
    --color-negative_hover: darkred;

    --font-size-small: 1rem;
    --font-size-medium: 1.3rem;
    --font-size-large: 2rem;

    --spacing-small: 0.5rem;
    --spacing-medium: 1rem;

    --border-radius: 10px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif;
    background-color: var(--color-1);
  }

  button, input, textarea {
    font-family: inherit;
  }
`;

export default GlobalStyle;
