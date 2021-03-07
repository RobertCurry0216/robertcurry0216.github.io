import styled from "styled-components";
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
        <div className={`knob ${toggled ? "off" : "on"}`}></div>
      </div>
    </Toggler>
  );
}

const Toggler = styled.div`
  cursor: pointer;
  transition: all 0.5s ease;
  overflow: hidden;

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
    box-shadow: 0px 0px 2px 0px var(--light);
    -webkit-box-shadow: 0px 0px 2px 0px var(--light);
    -moz-box-shadow: 0px 0px 2px 0px var(--light);

    background-color: var(--white);
    border: 1px solid var(--light);
    border-radius: 9999999px;
    width: 1.2rem;
    height: 1.2rem;

    position: relative;
    right: 0.7rem;

    &.off {
      right: -0.7rem;
    }

    &::before {
      content: "🌜";
      font-size: 0.8rem;
      position: relative;
      right: 1.3rem;
      bottom: 0.25rem;
    }

    &::after {
      content: "🌞";
      font-size: 0.8rem;
      position: relative;
      left: 1.3rem;
      bottom: 1.55rem;
    }
  }
`;

export default ThemeToggler;
