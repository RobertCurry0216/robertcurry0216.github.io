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
    title: "React Music player",
    description: "A single page app to listen to chill hop music",
    tech: [
      { id: uuidv4(), name: "javascript" },
      { id: uuidv4(), name: "react" },
      { id: uuidv4(), name: "redux" },
    ],
    image: music,
    links: [
      { id: uuidv4(), text: "Github", link: "" },
      { id: uuidv4(), text: "View", link: "" },
    ],
  },
];

export default Projects;
