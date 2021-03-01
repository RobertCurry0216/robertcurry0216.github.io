//react

//libraries
import styled from "styled-components";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

//componants
import Container, { Seperator, Card } from "../utils";
import SocialIcon from "./SocialIcon";

//assets
import profile from "./img/profile.jpg";
import { Colours, Breakpoints as bp } from "../../styles";

function About() {
  const languages = ["C#", "Javascript", "Python", "Go"];
  const backend = ["ASP.NET", "SQL", "Node.js"];
  const frontend = ["React", "Redux", "Blazor WebAssembly", "WPF", "Sass/Css"];

  return (
    <Container>
      <AboutContainer id="about">
        <h2>About Me</h2>
        <div className="aboutSection">
          <img src={profile} alt="" />
          <div className="descriptionSection">
            <h3>
              <span>Who am I?</span>
            </h3>
            <p>
              I am a full stack developer living in Melbourne. I have a passion
              for creating simple and easy to use things.
            </p>
            <p>
              In my personal time I enjoy creating micro-games in Lua using the
              <a href="https://www.lexaloffle.com/pico-8.php"> Pico-8 </a>
              fantasy console. When I'm not on my computer I like to catch up on
              the latest sci-fi or horror movie, read some Stephen King, or play
              card games with my friends.
            </p>
            <Seperator />
            <div className="contactSection">
              <button>Download My CV</button>
              <div className="socialLinks">
                <SocialIcon
                  socialIcon={faEnvelope}
                  link="mailto:robertcurry0216@pm.me"
                />
                <SocialIcon
                  socialIcon={faGithub}
                  link="https://github.com/RobertCurry0216"
                />
                <SocialIcon
                  socialIcon={faLinkedinIn}
                  link="https://www.linkedin.com/in/robert-curry-832a08134/"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="techSection">
          <Card>
            <h3>
              <span>Languages</span>
            </h3>
            <Seperator />
            <ul>
              {languages.map((v) => (
                <li>{v}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3>
              <span>Front end</span>
            </h3>
            <Seperator />
            <ul>
              {frontend.map((v) => (
                <li>{v}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3>
              <span>Back end</span>
            </h3>
            <Seperator />
            <ul>
              {backend.map((v) => (
                <li>{v}</li>
              ))}
            </ul>
          </Card>
        </div>
      </AboutContainer>
    </Container>
  );
}

// styles
const AboutContainer = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 6rem;
    font-weight: 700;
  }

  h2 {
    padding-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
    font-weight: lighter;
    padding: 0.5rem 0rem;
  }

  img {
    display: none;
    width: 10rem;
    object-fit: cover;

    @media ${bp.mobile} {
      display: block;
    }
  }

  .aboutSection {
    display: flex;
  }

  .descriptionSection {
    @media ${bp.mobile} {
      padding-left: 1rem;
    }
  }

  .contactSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${bp.mobile} {
      flex-direction: row;
    }

    button {
      background-color: ${Colours.primary};
      color: ${Colours.white};
      border-radius: 1.5rem;
      margin-right: 1rem;

      height: 3rem;

      &:hover {
        background-color: ${Colours.primaryDark};
        border-color: ${Colours.primaryDark};
      }
    }

    .socialLinks {
      display: flex;
      justify-content: center;
      padding: 1rem;
    }
  }

  .techSection {
    padding-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;

    h3 {
      font-size: 1rem;
    }
  }
`;

export default About;