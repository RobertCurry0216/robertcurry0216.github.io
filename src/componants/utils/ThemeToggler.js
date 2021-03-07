import styled from "styled-components";

function ThemeToggler({ className, toggleTheme }) {
  return (
    <Toggler className={className} onClick={toggleTheme}>
      Hello
    </Toggler>
  );
}

const Toggler = styled.div`
  cursor: pointer;
`;

export default ThemeToggler;
