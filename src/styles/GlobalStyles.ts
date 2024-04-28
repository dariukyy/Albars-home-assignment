import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --color-green-primary: #2acd83;
  --color-red-status: #ff8384;
  --color-gray-status: #dedfe5
  --color-main-row:#f0faf5
  --color-gray-secondary: #fcfcfc
  --color-gray-font: #6b7280;
  

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}



::selection {
  background: var(--color-green-primary); 
  color: white; 
}

html {
  font-size: 62.5%;

  @media (max-width: 768px) {
    font-size: 50%;


  @media (max-widrh: 1200px) {
    font-size: 80%;
  } 
    
}

}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-gray-font);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}



input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}


ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

`;

export default GlobalStyles;
