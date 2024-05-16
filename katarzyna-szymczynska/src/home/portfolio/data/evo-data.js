import logo from "../images/EVO-logo.png";

import figma from "../../myskills/images/figma.svg";

import icons from "../images/evo/evo-icons.svg";
import primaryButton from "../images/evo/primary-button.svg";

import f1 from "../images/evo/font1.svg";
import f2 from "../images/evo/font2.svg";
import f3 from "../images/evo/font3.svg";
import f4 from "../images/evo/font4.svg";

import img1 from "../images/evo/img1.jpg";

export var evoData = {
  title: "Website design for Evo Engineering",
  category: "mind",
  logo: logo,
  address: "",
  technologies: [figma],
  info: [
    {
      header: "Project Overview",
      bullets: [
        "The website design project for EVO Engineering was a pivotal endeavor aimed at establishing a robust online presence for a mechanic specializing in the repair of sports cars.",
        "By crafting a visually captivating and user-friendly website, the goal was to effectively communicate the essence of the brand, its core values, and its commitment to delivering unparalleled automotive services.",
      ],
    },
    {
      header: "Sleek and Minimalist Design",
      bullets: [
        "The website featured a sleek and minimalist design aesthetic, reflecting the precision and sophistication synonymous with sports car engineering.",
        "This design approach ensured a visually harmonious experience for visitors, aligning seamlessly with the existing logo and brand identity.",
      ],
    },
    {
      header: "Comprehensive Service Descriptions",
      bullets: [
        "The website showcased comprehensive descriptions of EVO Engineering's services, providing visitors with detailed insights into the range of offerings available.",
        "This section served as a valuable resource for prospective clients seeking information about the mechanic's expertise and capabilities.",
      ],
    },
    {
      header: "Updates on Current Events and Activities",
      bullets: [
        "In addition to service descriptions, the website provided updates on current events and activities related to the workshop.",
        "This dynamic content kept visitors informed about the latest developments, fostering engagement and reinforcing EVO Engineering's commitment to excellence.",
      ],
    },
  ],
  colors: [
    {
      name: "main, text",
      code: "#BCDE28",
    },
    {
      name: "secondary",
      code: "#3F4754",
    },
    {
      name: "text",
      code: "#252328",
    },
    {
      name: "tertiary",
      code: "#ADB7C8",
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
  ],
  fonts: [
    {
      name: "Poppins Bold 48p",
      image: f1,
    },
    {
      name: "Poppins Bold 24p",
      image: f2,
    },
    {
      name: "Poppins Regular 20p",
      image: f3,
    },
    {
      name: "Poppins Bold 16p",
      image: f4,
    },
  ],
  mockups: [img1],
};
