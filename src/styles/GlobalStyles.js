import { createGlobalStyle } from "styled-components";
import bp from "./Breakpoints";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.3s ease;
  
  --primary: ${({ theme }) => theme.primary};
  --primaryDark: ${({ theme }) => theme.primaryDark};
  --dark: ${({ theme }) => theme.dark};
  --light: ${({ theme }) => theme.light};
  --white: ${({ theme }) => theme.white};
  --text: ${({ theme }) => theme.text};
}

body{
  font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  color: var(--text);
  background-color: var(--white);

  @media ${bp.desktop}{
    margin-left: 15rem;
  }
}

button{
  font-weight: lighter;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary);
  border-radius: 3px;
  background: transparent;
  color: var(--primary);

  font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  
  &:hover{
    background-color: var(--primary);
    color: var(--white);
  }
}

span{
  color: var(--primary);
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
  color: var(--primary);
  font-weight: bold;
  &:hover{
    text-decoration: none;
    color: var(--primaryDark);
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
