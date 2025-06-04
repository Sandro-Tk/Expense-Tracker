import { createGlobalStyle } from "styled-components";
import "@fontsource/inter";

const GlobalStyle = createGlobalStyle`
  :root {

    &, &.light-mode{
    --color-1: #f4eeff;
    --color-2: #dcd6f7;
    --color-3: #a6b1e1;
    --color-4: #424874;
    }

    &.dark-mode{
    --color-1: #1b1b2f;
    --color-2: #2e2e4f;
    --color-3: #5c5f87;
    --color-4: #a6b1e1;
    }


    --color-positive: green;
    --color-negative: red;
    --color-negative-hover: darkred;

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

*,
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    transition: background-color 0.3s, border 0.3s;
}

  body {
    font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif;
    background-color: var(--color-1);
    transition: all 0.3s;
  }

  button, input, textarea {
    font-family: inherit;
  }
`;

export default GlobalStyle;
