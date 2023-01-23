import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

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
    font-family: ${(props) => props.theme.fonts.title};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }



.menu-items {
  position: relative;
  font-size: 2.2rem;
  border-radius: 10px;
 
}

.menu-items a {
  display: block;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
}

.menu-items button {
  color: inherit;
  font-size: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
}

.menu-items a,
.menu-items button {
  text-align: left;
  padding: 0.7rem 1rem;
}

.menu-items a:hover,
.menu-items button:hover {
  background-color: #fff;
}


.dropdown {
        position: absolute;
        width: 300px; 
        top: 0;  
        z-index: 9999;
        padding: 0.5rem 0;
        list-style: none;
        background-color: #f2f2f2;
        color: #000;
        display: none;
        }

.dropdown.show {
        display: block;
    }

.dropdown.dropdown-submenu {
        position: absolute;
        left: 100%;
        top:0px;
    }

`;

export default GlobalStyles;
