import placeholder from "./img/placeholder.svg";
import clipboard from "./img/clipboard.svg";
import music from "./img/music.svg";
import { v4 as uuidv4 } from "uuid";

const Projects = [
  {
    id: uuidv4(),
    title: "Post Tensioning Tool",
    description:
      "An addin for Reivt used by my team to import exported RAM data imported into revit and modeled in 3D.",
    tech: [
      { id: uuidv4(), name: "c#" },
      { id: uuidv4(), name: "wpf" },
    ],
    image: placeholder,
    links: [],
  },
  {
    id: uuidv4(),
    title: "ImageToClip",
    description:
      "Allows you to copy text from images to your clipboard to be pasted anywhere you like as plain text.",
    tech: [
      { id: uuidv4(), name: "c#" },
      { id: uuidv4(), name: "wpf" },
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
    description: "A toy programing language written in pure Go",
    tech: [{ id: uuidv4(), name: "go" }],
    image: placeholder,
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
    description: "A react app to listen to chill hop music",
    tech: [
      { id: uuidv4(), name: "javascript" },
      { id: uuidv4(), name: "react" },
      { id: uuidv4(), name: "redux" },
      { id: uuidv4(), name: "html" },
      { id: uuidv4(), name: "css" },
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
    description: "This site you're looking at right now",
    tech: [
      { id: uuidv4(), name: "javascript" },
      { id: uuidv4(), name: "react" },
      { id: uuidv4(), name: "html" },
      { id: uuidv4(), name: "css" },
    ],
    image: music,
    links: [
      {
        id: uuidv4(),
        text: "Github",
        link: "https://github.com/RobertCurry0216/robertcurry0216.github.io",
      },
    ],
  },
];

export default Projects;
