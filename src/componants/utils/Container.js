import styled from "styled-components";

function Container({ children }) {
  return (
    <Outer>
      <StyledContainer>{children}</StyledContainer>
    </Outer>
  );
}

const Outer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled.div`
  flex: 1;
  min-height: 100vh;
  max-width: 1008px;
  padding: 0rem 1.5rem;
`;

export default Container;
