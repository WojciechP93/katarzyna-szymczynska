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

import img1 from "../../../images/portfolio/uiux/subjects/equii-app/EquiAPP_1.png";
import img2 from "../../../images/portfolio/uiux/subjects/equii-app/EquiAPP_2.png";
import img3 from "../../../images/portfolio/uiux/subjects/equii-app/EquiAPP_3.png";
import img4 from "../../../images/portfolio/uiux/subjects/equii-app/EquiAPP_4.png";
import img5 from "../../../images/portfolio/uiux/subjects/equii-app/EquiAPP_5.png";
import img6 from "../../../images/portfolio/uiux/subjects/equii-app/EquiAPP_6.png";
import img7 from "../../../images/portfolio/uiux/subjects/equii-app/EquiAPP_7.png";
import img8 from "../../../images/portfolio/uiux/subjects/equii-app/EquiAPP_8.jpg";

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
  mockups: [img1, img2, img3, img4, img5, img6, img7, img8],
};
