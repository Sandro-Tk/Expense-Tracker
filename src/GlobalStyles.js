import { createGlobalStyle } from "styled-components";
import "@fontsource/inter";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-positive: green;
    --color-negative: red;
    --color-1:#f4eeff;
    --color-2:#dcd6f7;
    --color-3:#a6b1e1;
    --color-4:#424874;
    --color-negative_hover: darkred;

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

export const theme = {
    colors: {
        positive: "var(--color-positive)",
        negative: "var(--color-negative)",
        negative_hover: "var(--color-negative_hover)",
        color1: "var(--color-1)",
        color2: "var(--color-2)",
        color3: "var(--color-3)",
        color4: "var(--color-4)",

    },
    fontSizes: {
        small: "1rem",
        medium: "1.3rem",
        large: "2rem",
    },
    spacing: {
        small: "10px",
        medium: "20px",
    },
    borderRadius: "10px",
};

export default GlobalStyle;
