import logo from "../images/tapit-website-logo.png";

import figma from "../../myskills/images/figma.svg";
import ps from "../../myskills/images/photoshop.svg";
import illustrator from "../../myskills/images/illustrator.svg";
import aftereffects from "../../myskills/images/aftereffects.svg";
import affinity from "../../myskills/images/affinity.svg";
import wordpress from "../../myskills/images/wordpress.svg";

import icons from "../images/tapit/tapit-icons.svg";
import primaryButton from "../images/tapit/primary-button.svg";
import secondaryButton from "../images/tapit/secondary-button.svg";

import f1 from "../images/tapit/font1.svg";
import f2 from "../images/tapit/font2.svg";
import f3 from "../images/tapit/font3.svg";
import f4 from "../images/tapit/font4.svg";
import f5 from "../images/tapit/font5.svg";

import img1 from "../images/tapit/img1.jpg";
import img2 from "../images/tapit/img2.jpg";
import img3 from "../images/tapit/img3.jpg";
import img4 from "../images/tapit/img4.jpg";
import img5 from "../images/tapit/img5.jpg";
import img6 from "../images/tapit/img6.jpg";
import img7 from "../images/tapit/img7.png";
import img8 from "../images/tapit/img8.png";

export var tapitData = {
  title: "Website design for Tapit Solutions",
  category: "mind",
  logo: logo,
  address: "https://tapitsolutions.com/",
  technologies: [figma, ps, illustrator, aftereffects, affinity, wordpress],
  info: [
    {
      header: "Project Overview",
      bullets: [
        "Developed the UI design for Tapit, a startup offering intelligent solutions for the HoReCa industry.",
        "The solution involves installing IoT devices as tap handles, enabling data collection on beer consumption and providing statistics for efficient inventory management in pubs.",
      ],
    },
    {
      header: "Stylistic Approach",
      bullets: [
        "Embracing the essence of the HoReCa industry, the UI design features dark colors and vibrant illustrations, integral to the project.",
        "Incorporating golden, silver, and bronze hues, mirroring the packaging tiers offered in the solution.",
      ],
    },
    {
      header: "Website Content and Functionality",
      bullets: [
        "Detailed presentation of Tapit's offerings for both small and large businesses.",
        "Instructions on installing the tap handle, FAQs section, pricing options categorized into different packages.",
        "The website serves as a comprehensive guide for potential clients, ensuring easy navigation and access to essential information.",
      ],
    },
    {
      header: "Multimedia Integration",
      bullets: [
        "Creation of an animated video providing a succinct overview of the IoT solution.",
        "The video, animated using Adobe After Effects, complements the website's content, offering an engaging visual representation of Tapit's innovative offering.",
      ],
    },
    {
      header: "Related Projects",
      bullets: ["Tapit Solutions branding and packaging"],
    },
  ],
  colors: [
    {
      name: "main",
      code: "#DEA521",
    },
    {
      name: "secondary",
      code: "#232A30",
    },
    {
      name: "gold",
      code: "linear-gradient(113.44deg, #FAF6E5 14.05%, #F4D9AD 35.97%, #FFF5D4 63.02%, #F7D9B5 88.97%, #FEEFE5 99.15%)",
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
      name: "Poppins Bold 64p",
      image: f1,
    },
    {
      name: "Poppins Bold 48p",
      image: f2,
    },
    {
      name: "Lato Black 24p",
      image: f3,
    },
    {
      name: "Lato Regular 16p",
      image: f4,
    },
    {
      name: "Open Sans SemiBold 18p",
      image: f5,
    },
  ],
  mockups: [img1, img2, img3, img4, img5, img6, img7, img8],
};
