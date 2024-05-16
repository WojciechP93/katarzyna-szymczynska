import logo from "../images/horse&nature-logo.png";

import figma from "../../myskills/images/figma.svg";
import ps from "../../myskills/images/photoshop.svg";
import illustrator from "../../myskills/images/illustrator.svg";
import css from "../../myskills/images/css3.svg";
import html from "../../myskills/images/html5.svg";
import vsc from "../../myskills/images/vscode.svg";
import github from "../../myskills/images/github.svg";

import icons from "../images/han/han-icons.svg";
import primaryButton from "../images/han/primary-button.svg";
import secondaryButton from "../images/han/secondary-button.svg";

import f1 from "../images/han/font1.svg";
import f2 from "../images/han/font2.svg";
import f3 from "../images/han/font3.svg";
import f4 from "../images/han/font4.svg";
import f5 from "../images/han/font5.svg";

import img1 from "../images/han/img1.jpg";
import img2 from "../images/han/img2.jpg";
import img5 from "../images/han/img5.jpg";
import img6 from "../images/han/img6.jpg";
import img7 from "../images/han/img7.jpg";
import img8 from "../images/han/img8.jpg";
import img9 from "../images/han/img9.jpg";
import img10 from "../images/han/img10.jpg";

export var hanData = {
  title: "Website design for Horse&Natrure",
  category: "mind",
  logo: logo,
  address: "https://horseandnature.pl/",
  technologies: [figma, ps, illustrator, css, html, vsc, github],
  info: [
    {
      header: "Project Overview",
      bullets: [
        "PS4BC's UI design emphasizes usability and brand alignment.",
        "It enhances user experience through intuitive navigation and industry-specific visuals.",
        "Clean layout and captivating visuals solidify PS4BC's reputation.",
        "Consistent design elements across platforms ensure seamless interaction and brand recognition.",
      ],
    },
    {
      header: "User Accounts",
      bullets: [
        "Secure account creation enables personalized experiences.",
        "Users can access capital investment opportunities.",
        "Business partners can join the Partner Club for exclusive benefits and advantages.",
      ],
    },
    {
      header: "Visual Elements",
      bullets: [
        "Background images of container ships provide context.",
        "Reflects PS4BC's global distribution activities.",
        "Demonstrates commitment to innovation in the industry",
        "Black background and orange elements in the UI signify sophistication and brand consistency, enhancing user engagement and reinforcing PS4BC's identity.",
      ],
    },
    {
      header: "Aesthetic Approach",
      bullets: [
        "Sleek design with black and orange tones exudes sophistication.",
        "Sharp edges and minimalist text convey professionalism.",
        "Modern aesthetic aligns with PS4BC's innovative image.",
      ],
    },
  ],
  colors: [
    {
      name: "main, text",
      code: "#3E342B",
    },
    {
      name: "secondary",
      code: "#EEE5DA",
    },
    {
      name: "tertiary",
      code: "#C7CAA1",
    },
    {
      name: "background",
      code: "#FFFFFF",
    },
  ],
  icons: icons,
  graphics: "",
  buttons: [
    {
      name: "Primary",
      image: primaryButton,
    },
    {
      name: "Secondary",
      image: secondaryButton,
    },
  ],
  fonts: [
    {
      name: "Playfair Display Bold 48p",
      image: f1,
    },
    {
      name: "Montserrat Medium 36p",
      image: f2,
    },
    {
      name: "Montserrat Bold 20p",
      image: f3,
    },
    {
      name: "Montserrat Regular 20p",
      image: f4,
    },
    {
      name: "Montserrat SemiBold 20p",
      image: f5,
    },
  ],
  mockups: [img1, img2, img5, img6, img7, img8, img9, img10],
};
