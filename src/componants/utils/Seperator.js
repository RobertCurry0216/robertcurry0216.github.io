import styled from "styled-components";

function Seperator() {
  return (
    <LineContainer>
      <Line />
    </LineContainer>
  );
}

const Line = styled.div`
  background-color: var(--light);
  height: 1px;
  width: 90%;
  margin: 0.8rem 0rem;
`;

const LineContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default Seperator;
