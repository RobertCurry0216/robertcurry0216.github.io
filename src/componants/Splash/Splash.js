import styled from "styled-components";
import Container from "../utils/Container";
import { Breakpoints as bp } from "../../styles";
import { ThemeToggler } from "../utils";

function Splash({ toggleTheme }) {
  return (
    <Container>
      <StyledSplash id="home">
        <ThemeToggler className="theme-toggler" toggleTheme={toggleTheme} />
        <div className="splash">
          <div className="textarea">
            <h3 className="greeting">Hi, I'm</h3>
            <div className="name">
              <h1>Robert</h1>
              <h1>
                <span>Curry</span>
              </h1>
            </div>
            <h3 className="description">I am a developer</h3>
          </div>
        </div>
      </StyledSplash>
    </Container>
  );
}

// styles
const StyledSplash = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .splash {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    h1 {
      font-size: 4rem;
      font-weight: 700;
      @media ${bp.desktop} {
        font-size: 6rem;
      }
    }

    .name {
      @media ${bp.mobile} {
        display: flex;
      }
    }

    h3 {
      font-size: 1.15rem;
    }

    .textarea {
      display: flex;
      flex-direction: column;
      position: relative;
      bottom: 5rem;

      .greeting {
        padding-left: 5px;
      }

      .description {
        align-self: flex-end;
      }
    }
  }

  .theme-toggler {
    align-self: flex-end;
    justify-self: flex-start;
    position: relative;
    top: 5rem;
    right: 1rem;
  }
`;

export default Splash;
