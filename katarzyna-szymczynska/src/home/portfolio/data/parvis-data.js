import logo from "../images/parvis-logo.png";

import figma from "../../myskills/images/figma.svg";
import photoshop from "../../myskills/images/photoshop.svg";
import illustrator from "../../myskills/images/illustrator.svg";

import icons from "../images/parvis/parvis-icons.svg";

import f1 from "../images/parvis/font1.svg";
import f2 from "../images/parvis/font2.svg";
import f3 from "../images/parvis/font3.svg";
import f4 from "../images/parvis/font4.svg";

import img1 from "../images/parvis/img1.png";
import img2 from "../images/parvis/img2.png";
import img3 from "../images/parvis/img3.png";
import img4 from "../images/parvis/img4.png";

export var parvisData = {
  title: "Website design for Parvis",
  category: "mind",
  logo: logo,
  address: "",
  technologies: [figma, photoshop, illustrator],
  info: [
    {
      header: "Project Overview",
      bullets: [
        "The website design for Parvis, a real estate rental company, prioritizes simplicity and elegance to convey the professionalism of the firm.",
        "The project aimed to create a digital presence that reflects the exclusivity and high-quality services offered by Parvis.",
      ],
    },
    {
      header: "Color Palette and Visual Identity",
      bullets: [
        "Dark bottle green and gold colors were chosen to accentuate exclusivity and signify the premium quality of services provided by Parvis.",
        "These colors are strategically incorporated throughout the website to evoke a sense of sophistication and luxury.",
      ],
    },
    {
      header: "Comprehensive Branding",
      bullets: [
        "In addition to the website design, the project encompassed the creation of the company logo, ensuring consistency and cohesion in the brand's visual identity.",
        "Materials such as business cards and corporate folders were also designed to reflect the elegance and professionalism synonymous with Parvis",
      ],
    },
    {
      header: "Sleek and Minimalist Design",
      bullets: [
        "The website features a sleek and minimalist design aesthetic, with clean lines and intuitive navigation, providing visitors with a seamless browsing experience.",
        "Through carefully curated visuals and concise content, the website effectively communicates Parvis' commitment to excellence in the real estate industry.",
      ],
    },
  ],
  colors: [
    {
      name: "main, text",
      code: "#1A3D25",
    },
    {
      name: "secondary",
      code: "#DACCAF",
    },
    {
      name: "gold",
      code: "linear-gradient(223.09deg, #EFDFBD 5.86%, #D5AC78 23.15%, #F3DEC1 45.9%, #C6A16D 60.46%, #8C724D 81.4%, #D7C9AB 96.87%)",
    },
    {
      name: "background",
      code: "#FFFFFF",
    },
  ],
  icons: icons,
  fonts: [
    {
      name: "Poppins Medium 48p",
      image: f1,
    },
    {
      name: "Poppins Regular 24p",
      image: f2,
    },
    {
      name: "Poppins Regular 24p",
      image: f3,
    },
    {
      name: "Poppins Regular 32p",
      image: f4,
    },
  ],
  mockups: [img1, img2, img3, img4],
};
