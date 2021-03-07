import styled from "styled-components";

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

const StyledCard = styled.div`
  padding: 1rem;
  border: 0.5px solid var(--light);
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export default Card;
