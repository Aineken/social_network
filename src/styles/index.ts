import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import {ThemeType} from "../theme";

const GlobalStyles = createGlobalStyle`
  ${normalize}
 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *:focus {
    outline: none;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    cursor: default;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${(props:ThemeType) => {
      
      
     return props.theme.fonts.title
    }

      
};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyles;
