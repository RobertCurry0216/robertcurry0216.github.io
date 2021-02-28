//react

//libraries
import styled from "styled-components";

//assets
import { Colours } from "../../styles";

function Contact() {
  return (
    <Shape>
      <StyledContact id="contact">
        <h2>Contact:</h2>
        <h3>
          Email: <a href="mailto:robertcurry@pm.me">robertcurry@pm.me</a>
        </h3>
        <h3>
          Github:{" "}
          <a href="https://github.com/RobertCurry0216">robertcurry0216</a>
        </h3>
        <h3>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/robert-curry-832a08134/">
            robert curry
          </a>
        </h3>
      </StyledContact>
      <div className="infill"></div>
    </Shape>
  );
}

const Shape = styled.div`
  position: relative;
  width: 100%;
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 51%;
    background: ${Colours.dark};
    transform: skew(0deg, 6deg);
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background: ${Colours.dark};
    transform: skew(0deg, -6deg);
  }

  .infill {
    position: absolute;
    top: 50%;
    align-self: flex-end;
    height: 25vh;
    width: 100%;
    background-color: ${Colours.dark};
  }
`;

const StyledContact = styled.div`
  flex: 1;
  z-index: 5;
  max-width: 1008px;
  padding: 0rem 1.5rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  h2 {
    color: ${Colours.white};
  }

  h3 {
    color: ${Colours.white};
    font-weight: bold;
    font-size: 1.8rem;
    padding-top: 0.5rem;
  }
`;

export default Contact;
