//react
import { useState } from "react";

// libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

//assets
import profile from "./img/profile.jpg";

//styles
import { Colours, Breakpoints as bp } from "../../styles";

function SideNav() {
  const [showMenu, setShowMenu] = useState(false);
  function toggleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <Nav>
      <ProfilePic src={profile} alt="my sexy mug" />
      <h2>Robert Curry</h2>
      <button onClick={toggleShowMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={showMenu ? "expanded" : ""}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </Nav>
  );
}

// styles
const Nav = styled.nav`
  background-color: ${Colours.dark};
  position: fixed;
  top: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 0rem 1rem;
  z-index: 5;

  h2 {
    color: ${Colours.white};
    font-weight: lighter;
    width: auto;
    z-index: 5;
  }

  ul {
    list-style-type: none;
    width: 100%;
    position: absolute;
    top: -100vh;
    left: 0rem;
    transition: all 0.5s ease-in-out;
    background: ${Colours.dark};
    z-index: 1;
  }

  .expanded {
    top: 3rem;
  }

  li {
    margin: 1rem;
  }

  a {
    color: ${Colours.light};
    text-transform: uppercase;
    font-weight: 800;

    &:hover {
      color: ${Colours.white};
    }
  }

  button {
    z-index: 5;
    color: ${Colours.light};
    border-color: ${Colours.light};

    &:hover {
      color: ${Colours.white};
      border-color: ${Colours.primary};
    }
  }

  @media ${bp.desktop} {
    height: 100%;
    width: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul {
      width: auto;
      padding-left: 0rem;

      position: initial;
    }

    h2 {
      visibility: hidden;
    }

    button {
      display: none;
    }
  }
`;

const ProfilePic = styled.img`
  max-width: 60%;
  border-radius: 50%;
  border: 0.5rem solid ${Colours.light};
  display: none;
  @media ${bp.desktop} {
    display: block;
  }
`;

export default SideNav;
