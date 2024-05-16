import logo from "../images/AMK-logo.png";

import figma from "../../myskills/images/figma.svg";
import photoshop from "../../myskills/images/photoshop.svg";
import illustrator from "../../myskills/images/illustrator.svg";
import dsmax from "../../myskills/images/3dmax.svg";

import icons from "../images/amk/amk-icons.svg";

import primaryButton from "../images/amk/primary-button.svg";

import f1 from "../images/amk/font1.svg";
import f2 from "../images/amk/font2.svg";
import f3 from "../images/amk/font3.svg";
import f4 from "../images/amk/font4.svg";

import img1 from "../images/amk/img1.png";
import img2 from "../images/amk/img2.png";
import img3 from "../images/amk/img3.png";
import img4 from "../images/amk/img4.png";

export var amkData = {
  title: "Intefrace design for flight simulator",
  category: "mind",
  logo: logo,
  address: "",
  technologies: [figma, dsmax, photoshop, illustrator],
  info: [
    {
      header: "Project Overview",
      bullets: [
        "Leading the design of the user interface (UI) for AMK's Aviator-1 programmable flight simulator, aimed at delivering a seamless user experience (UX) for controlling complex machinery.",
      ],
    },
    {
      header: "User Interface Design",
      bullets: [
        "Prioritizing intuitive navigation and clear visual communication to ensure users can easily interact with the simulator's controls.",
        "Designing intuitive menus and controls for smooth operation",
        "Implementing clear visual cues to guide users through various functions and features",
      ],
    },
    {
      header: "3D Modeling",
      bullets: [
        "Creating a detailed 3D model of the Simulation Platform using 3D Max to provide a realistic and immersive experience for users.",
        "Modeling the physical components of the simulator with precision and attention to detail.",
        "Incorporating textures and lighting effects to enhance realism and immersion",
      ],
    },
    {
      header: "Additional Design Elements",
      bullets: [
        "Designing folder and ID cards for the AMK team to maintain a cohesive and professional brand image.",
        "Creating visually appealing and informative folder designs to organize project materials.",
        "Developing ID cards that reflect the company's identity while providing essential information for team members.",
      ],
    },
  ],
  colors: [
    {
      name: "main, text",
      code: "#014A8E",
    },
    {
      name: "secondary",
      code: "#26252A",
    },
    {
      name: "tertiary",
      code: "#1B1C20",
    },
    {
      name: "background",
      code: "linear-gradient(143.63deg, #191E44 11.34%, #3F4BAA 98.15%)",
    },
  ],
  icons: icons,
  buttons: [
    {
      name: "Primary",
      image: primaryButton,
    },
  ],
  fonts: [
    {
      name: "Poppins Regular 48p",
      image: f1,
    },
    {
      name: "Poppins Regular 24p",
      image: f2,
    },
    {
      name: "Inconsolata 20p",
      image: f3,
    },
    {
      name: "Poppins Bold 16p",
      image: f4,
    },
  ],
  mockups: [img1, img2, img3, img4],
};
