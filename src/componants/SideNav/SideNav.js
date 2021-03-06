//react
import { useState } from "react";

// libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-scroll";

//assets
import profile from "./img/profile.jpg";

//styles
import { Breakpoints as bp } from "../../styles";

function SideNav() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleShowMenu() {
    setShowMenu(!showMenu);
  }

  function onClickHandler() {
    setShowMenu(false);
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
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={onClickHandler}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={onClickHandler}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            onClick={onClickHandler}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            onClick={onClickHandler}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={onClickHandler}
          >
            Contact
          </Link>
        </li>
      </ul>
    </Nav>
  );
}

// styles
const Nav = styled.nav`
  background-color: var(--dark);
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
    color: var(--white);
    font-weight: lighter;
    width: auto;
    z-index: 5;
    padding-top: 0rem;
  }

  ul {
    list-style-type: none;
    width: 100%;
    position: absolute;
    top: -100vh;
    left: 0rem;
    background: var(--dark);
    z-index: 1;
  }

  .expanded {
    top: 3rem;
  }

  li {
    margin: 1rem;
  }

  a {
    color: var(--light);
    text-transform: uppercase;
    font-weight: 800;

    &:hover {
      cursor: pointer;
    }
  }

  .active {
    color: var(--white);
  }

  button {
    z-index: 5;
    color: var(--light);
    border-color: var(--light);

    &:hover {
      color: var(--white);
      border-color: var(--primary);
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
  border: 0.5rem solid var(--light);
  display: none;
  @media ${bp.desktop} {
    display: block;
  }
`;

export default SideNav;
