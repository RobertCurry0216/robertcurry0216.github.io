//images
import placeholder from "./img/placeholder.svg";
import clipboard from "./img/clipboard.svg";
import music from "./img/music.svg";
import pttool from "./img/pttool.svg";
import monkey from "./img/monkey.svg";
import portfolio from "./img/portfolio.svg";
import exit from "./img/void.png";

import { v4 as uuidv4 } from "uuid";

const Projects = [
  {
    id: uuidv4(),
    title: "ImageToClip",
    description:
      "A small application to allow you to cut and paste text from images as if it were plain text.",
    tech: [
      { id: uuidv4(), name: "C#" },
      { id: uuidv4(), name: "WPF" },
    ],
    image: clipboard,
    links: [
      {
        id: uuidv4(),
        text: "Github",
        link: "https://github.com/RobertCurry0216/ImageToClip",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Monkey",
    description: "A toy programing language written in pure Go.",
    tech: [{ id: uuidv4(), name: "Go" }],
    image: monkey,
    links: [
      {
        id: uuidv4(),
        text: "Github",
        link: "https://github.com/RobertCurry0216/monkey",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Waves Music player",
    description: "A React app to listen to chill hop music.",
    tech: [
      { id: uuidv4(), name: "Javascript" },
      { id: uuidv4(), name: "React" },
      { id: uuidv4(), name: "Redux" },
      { id: uuidv4(), name: "HTML" },
      { id: uuidv4(), name: "Css/Scss" },
    ],
    image: music,
    links: [
      {
        id: uuidv4(),
        text: "Github",
        link: "https://github.com/RobertCurry0216/react-player",
      },
      {
        id: uuidv4(),
        text: "View",
        link: "https://robertcurry.xyz/react-player/",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Portfolio Site",
    description: (
      <p>
        This site you're looking at right now 😊 Written using React and custom
        styling using{" "}
        <a href="https://styled-components.com/"> styled-components</a>.
      </p>
    ),
    tech: [
      { id: uuidv4(), name: "Javascript" },
      { id: uuidv4(), name: "React" },
      { id: uuidv4(), name: "HTML" },
      { id: uuidv4(), name: "Scss/styled-compoents" },
    ],
    image: portfolio,
    links: [
      {
        id: uuidv4(),
        text: "Github",
        link: "https://github.com/RobertCurry0216/robertcurry0216.github.io",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Exit the Void - Pico-8",
    description: (
      <p>
        A <a href="https://www.lexaloffle.com/pico-8.php"> Pico-8 </a> game
        about circling blackholes to rescue your friends while not being
        consumed yourself.
      </p>
    ),
    tech: [
      { id: uuidv4(), name: "Lua" },
      { id: uuidv4(), name: "Pico-8" },
    ],
    image: exit,
    links: [
      {
        id: uuidv4(),
        text: "Github",
        link: "https://github.com/RobertCurry0216/pico-8/tree/master/void",
      },
      {
        id: uuidv4(),
        text: "Play",
        link: "https://robertcurry.xyz/pico-8/",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Post Tensioning Tool",
    description: (
      <p>
        An addin for
        <a href="https://www.autodesk.com/products/revit/overview?term=1-YEAR&support=null">
          {" "}
          Revit{" "}
        </a>
        used by my team to import RAM engineering data into{" "}
        <a href="https://www.autodesk.com/products/revit/overview?term=1-YEAR&support=null">
          {" "}
          Revit{" "}
        </a>{" "}
        and model the data in 3D.
      </p>
    ),
    tech: [
      { id: uuidv4(), name: "C#" },
      { id: uuidv4(), name: "WPF" },
    ],
    image: pttool,
    links: [],
  },
];

export default Projects;
