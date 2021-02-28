//react

//libraries
import styled from "styled-components";

//componants
import Container, { Seperator, Card } from "../utils";

//assets
import Projects from "./Projects";

//styles
import { Colours } from "../../styles";

function Portfolio() {
  return (
    <Container>
      <StyledPortfolio id="portfolio">
        <h2>Portfolio</h2>
        <div className="projects">
          {Projects.map((project) => (
            <Card>
              <div className="project">
                <h3>{project.title}</h3>
                <img src={project.image} alt="" />
                <p>{project.description}</p>
                <Seperator />
                <div className="bottom-half">
                  <div className="tech">
                    <h4>Tech Used</h4>
                    <ul>
                      {project.tech.map((t) => (
                        <li>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="links">
                    {project.links.map((l) => (
                      <a href={l.link}>{l.text}</a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
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
    padding-bottom: 1.5rem;
  }

  .projects {
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }

  .project {
    display: flex;
    flex-direction: column;

    h3 {
      align-self: center;
      font-weight: bold;
    }

    img {
      width: 10rem;
      height: 10rem;
      overflow: hidden;
      align-self: center;
    }

    .bottom-half {
      display: flex;
      justify-content: space-between;
      height: 100%;

      a {
        margin-right: 0.5rem;
        font-weight: lighter;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 0.5rem 1rem;
        border: 1px solid ${Colours.primary};
        border-radius: 3px;
        background: transparent;
        color: ${Colours.primary};
        transition: all 0.3s ease;

        font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

        &:hover {
          background-color: ${Colours.primary};
          color: ${Colours.white};
        }
      }
    }
  }
`;

export default Portfolio;