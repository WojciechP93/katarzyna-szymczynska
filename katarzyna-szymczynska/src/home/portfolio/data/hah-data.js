import logo from "../images/HAH-logo.png";

import figma from "../../myskills/images/figma.svg";
import ps from "../../myskills/images/photoshop.svg";
import shopify from "../../myskills/images/shopify.svg";
import notion from "../../myskills/images/notion.svg";

import icons from "../images/hah/hah-icons.svg";
import primaryButton from "../images/hah/primary-button.svg";
import secondaryButton from "../images/hah/secondary-button.svg";

import f1 from "../images/hah/font1.svg";
import f2 from "../images/hah/font2.svg";
import f3 from "../images/hah/font3.svg";
import f4 from "../images/hah/font4.svg";
import f5 from "../images/hah/font5.svg";

import img1 from "../images/hah/img1.jpg";
import img2 from "../images/hah/img2.jpg";
import img3 from "../images/hah/img3.jpg";
import img4 from "../images/hah/img4.jpg";
import img5 from "../images/hah/img5.jpg";
import img6 from "../images/hah/img6.jpg";
import img7 from "../images/hah/img7.jpg";
import img8 from "../images/hah/img8.png";

export var hahData = {
  title: "Website design for Home Art Haven",
  category: "mind",
  logo: logo,
  address: "https://homearthaven.com/",
  technologies: [figma, ps, shopify, notion],
  info: [
    {
      header: "Project Overview",
      bullets: [
        "Introducing the UI design project for the website of Home Art Haven, a rising star in the art industry known for printing AI-generated images onto canvas.",
      ],
    },
    {
      header: "Responsive Design",
      bullets: [
        "This project includes both mobile and desktop versions of the website, meticulously crafted to seamlessly adapt to varying screen sizes.",
        "The design ensures an optimal viewing experience for users across different devices, enhancing accessibility and usability.",
      ],
    },
    {
      header: "Visual Consistency",
      bullets: [
        "Rooted in the existing logo and color palette, the design maintains visual consistency throughout the website.",
        "By harmonizing aesthetics with functionality, the UI offers an immersive experience for art enthusiasts exploring the diverse range of AI-generated images available for printing.",
      ],
    },
    {
      header: "Additional Deliverables",
      bullets: [
        "In addition to the website design, the project involved preparing mockups for presentations of the printed artworks on walls.",
        "Advertising banners in various sizes were also created for online platforms, extending the brand's reach and promoting its unique offerings.",
      ],
    },
  ],
  colors: [
    {
      name: "main, text",
      code: "#353546",
    },
    {
      name: "secondary",
      code: "#EFEFEF",
    },
    {
      name: "text",
      code: "#252328",
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
      name: "Open Sans Regular 38p",
      image: f1,
    },
    {
      name: "Open Sans Regular 30p",
      image: f2,
    },
    {
      name: "Open Sans Regular 24p",
      image: f3,
    },
    {
      name: "Montserrat Regular 20p",
      image: f4,
    },
    {
      name: "Montserrat Medium 14p",
      image: f5,
    },
  ],
  mockups: [img1, img2, img3, img4, img5, img6, img7, img8],
};
