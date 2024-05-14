import logo from "../images/BSS-logo.png";

import figma from "../../myskills/images/figma.svg";
import notion from "../../myskills/images/notion.svg";
import webflow from "../../myskills/images/webflow.svg";

import primaryButton from "../images/bss/primary-button.svg";
import secondaryButton from "../images/bss/secondary-button.svg";

import f1 from "../images/bss/font1.svg";
import f2 from "../images/bss/font2.svg";
import f3 from "../images/bss/font3.svg";
import f4 from "../images/bss/font4.svg";
import f5 from "../images/bss/font5.svg";

import img1 from "../images/bss/img1.png";
import img2 from "../images/bss/img2.png";
import img3 from "../images/bss/img3.png";

export var bssData = {
  title: "Blue Station Studios website",
  category: "mind",
  logo: logo,
  address: "https://www.bluestationstudios.com/",
  technologies: [figma, notion, webflow],
  info: [
    {
      header: "Project Overview",
      bullets: [
        "BlueStationStudios website project was created using a template from the Webflow platform in Figma and then realized on the Webflow platform.",
        "The Webflow platform allows for the immediate creation of the website on various device sizes.",
        "The website serves as a concise presentation of BlueStationStudios' key projects, with a dedicated contact page.",
      ],
    },
    {
      header: "Template Adaptation and Development",
      bullets: [
        "The template was customized to reflect BlueStationStudios' branding and requirements in Figma.",
        "Subsequently, the design was implemented on the Webflow platform, ensuring responsiveness across different devices.",
      ],
    },
    {
      header: "Content and Functionality",
      bullets: [
        "The website succinctly showcases the significant projects undertaken by BlueStationStudios.",
        "A dedicated contact page provides users with easy access to reach out for inquiries or collaboration opportunities.",
      ],
    },
    {
      header: "Visual Style",
      bullets: [
        "The website adopts a clear, grey-blue color scheme, reflecting the company's name and the IT sector's aesthetics.",
        "With a minimalist and streamlined design, the site maintains a professional appearance while being sparing in its use of graphics",
      ],
    },
    {
      header: "Related Projects",
      bullets: ["Brandbook for Blue Station Studios"],
    },
  ],
  colors: [
    {
      name: "main",
      code: "#0C3355",
    },
    {
      name: "secondary",
      code: "#DAE4EE",
    },
    {
      name: "background",
      code: "FFFFFF",
    },
    {
      name: "text",
      code: "#313437",
    },
  ],
  icons: "",
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
      name: "Poppins SemiBold 48p",
      image: f1,
    },
    {
      name: "Poppins Regular 48p",
      image: f2,
    },
    {
      name: "Poppins Regular 40p",
      image: f3,
    },
    {
      name: "Inter Regular 18p",
      image: f4,
    },
    {
      name: "Inter Medium 16p",
      image: f5,
    },
  ],
  mockups: [img1, img2, img3],
};
