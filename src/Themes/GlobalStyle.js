import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fonts.family};
    box-sizing: border-box;
    background: white;
    overflow-x: hidden;
  };
`;

export default GlobalStyle;
