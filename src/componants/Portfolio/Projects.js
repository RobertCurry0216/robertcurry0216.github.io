import placeholder from "./img/placeholder.svg";
import clipboard from "./img/clipboard.svg";
import music from "./img/music.svg";

const Projects = [
  {
    title: "Post Tensioning Tool",
    description:
      "An addin for Reivt used by my team to import exported RAM data imported into revit and modeled in 3D.",
    tech: ["c#", "wpf"],
    image: placeholder,
    links: [],
  },
  {
    title: "ImageToClip",
    description:
      "Allows you to copy text from images to your clipboard to be pasted anywhere you like as plain text.",
    tech: ["c#", "wpf"],
    image: clipboard,
    links: [
      {
        text: "Github",
        link: "https://github.com/RobertCurry0216/ImageToClip",
      },
    ],
  },
  {
    title: "Monkey",
    description: "A toy programing language written in pure Go",
    tech: ["go"],
    image: placeholder,
    links: [
      { text: "Github", link: "https://github.com/RobertCurry0216/monkey" },
    ],
  },
  {
    title: "React Music player",
    description: "A single page app to listen to chill hop music",
    tech: ["javascript", "react", "redux"],
    image: music,
    links: [
      { text: "Github", link: "" },
      { text: "View", link: "" },
    ],
  },
];

export default Projects;
