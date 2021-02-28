import { createGlobalStyle } from "styled-components";
import Colours from "./Colours";
import bp from "./Breakpoints";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  color: ${Colours.dark};

  @media ${bp.desktop}{
    margin-left: 15rem;
  }
}

button{
  font-weight: lighter;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid ${Colours.primary};
  border-radius: 3px;
  background: transparent;
  color: ${Colours.primary};
  transition: all 0.3s ease;

  font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  
  &:hover{
    background-color: ${Colours.primary};
    color: ${Colours.white};
  }
}

span{
  color: ${Colours.primary};
}

h1,
h2,
h3,
h4,
h5,
h6 {
    text-transform: uppercase;
    font-family: "Saira Extra Condensed", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

h1 {
    line-height: 1;
}

h2 {
    font-weight: normal;
    padding-top: 4rem;
  }

h3{
  font-weight: lighter;
}

a{
  text-decoration: none;
  color: ${Colours.primary};
  &:hover{
    text-decoration: none;
    color: ${Colours.primaryDark}
  }
}

ul {
  list-style: none;
}

li {
  font-weight: lighter;
}

`;

export default GlobalStyle;
