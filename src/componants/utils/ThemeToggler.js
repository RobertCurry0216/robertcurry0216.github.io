import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ThemeToggler({ className, toggleTheme }) {
  const [toggled, setToggled] = useState(false);

  function clickHandler() {
    setToggled((t) => !t);
    toggleTheme();
  }

  return (
    <Toggler className={className} onClick={clickHandler}>
      <div className="pill">
        <div className={`knob ${toggled ? "off" : "on"}`}>
          <div className="moon">
            <FontAwesomeIcon icon={faMoon} />
          </div>
          <div className="circle"></div>
          <div className="sun">
            <FontAwesomeIcon icon={faSun} />
          </div>
        </div>
      </div>
    </Toggler>
  );
}

const Toggler = styled.div`
  cursor: pointer;
  transition: all 0.5s ease;

  .pill {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    border-radius: 9999999px;
    width: 3rem;
    height: 1.5rem;

    overflow: hidden;

    box-shadow: 0px 0px 3px 0px var(--light) inset;
    -webkit-box-shadow: 0px 0px 3px 0px var(--light) inset;
    -moz-box-shadow: 0px 0px 3px 0px var(--light) inset;
  }

  .knob {
    position: relative;
    right: 0.7rem;
    display: flex;
    align-items: center;

    &.off {
      right: -0.7rem;
    }

    .circle {
      box-shadow: 0px 0px 2px 0px var(--light);
      -webkit-box-shadow: 0px 0px 2px 0px var(--light);
      -moz-box-shadow: 0px 0px 2px 0px var(--light);

      background-color: var(--white);
      border: 1px solid var(--light);
      border-radius: 9999999px;
      width: 1.2rem;
      height: 1.2rem;
    }

    .moon {
      font-size: 0.8rem;
      margin-right: 0.4rem;
    }

    .sun {
      font-size: 0.8rem;
      margin-left: 0.4rem;
    }
  }
`;

export default ThemeToggler;
