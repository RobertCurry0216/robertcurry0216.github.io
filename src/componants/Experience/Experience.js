//react

//libraries
import styled from "styled-components";

//componants
import Container, { Seperator } from "../utils";

//assets
import { WorkHistory, EducationHistory } from "./History";

function Experience() {
  return (
    <Container>
      <StyledPortfolio id="experience">
        <h2>Work History</h2>
        <div className="work-history">
          {WorkHistory.map((wh) => (
            <>
              <Seperator />
              <History>
                <h3>{wh.title}</h3>
                <h4>
                  <span>{wh.dates}</span>
                </h4>
                <p>{wh.desctiption}</p>
              </History>
            </>
          ))}
        </div>
        <Seperator />
        <h2>Education History</h2>
        <div className="edu-history">
          {EducationHistory.map((eh) => (
            <>
              <Seperator />
              <History>
                <h3>{eh.title}</h3>
                <h4>
                  <span>{eh.dates}</span>
                </h4>
                <p>{eh.desctiption}</p>
              </History>
            </>
          ))}
        </div>
        <Seperator />
      </StyledPortfolio>
    </Container>
  );
}

const StyledPortfolio = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;

  h2 {
    padding: 1.5rem 0rem;
  }
`;

const History = styled.div`
  width: 90%;
  margin-left: 5%;
  h3 {
    font-weight: normal;
  }
  h4 {
    font-weight: lighter;
  }

  p {
    padding: 0.5rem 0rem;
  }
`;

export default Experience;
