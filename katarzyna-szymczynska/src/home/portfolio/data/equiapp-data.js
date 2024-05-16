import logo from "../images/equiapp-logo.svg";

import figma from "../../myskills/images/figma.svg";
import photoshop from "../../myskills/images/photoshop.svg";
import illustrator from "../../myskills/images/illustrator.svg";

import icons from "../images/equiapp/equiapp-icons.svg";

import primaryButton from "../images/equiapp/primary-button.svg";

import img1 from "../images/equiapp/img1.jpg";
import img2 from "../images/equiapp/img2.jpg";
import img3 from "../images/equiapp/img3.jpg";
import img4 from "../images/equiapp/img4.jpg";
import img5 from "../images/equiapp/img5.jpg";
import img6 from "../images/equiapp/img6.jpg";

export var equiappData = {
  title: "EquiApp project - app for horselovers",
  category: "mind",
  logo: logo,
  address: "",
  technologies: [figma, photoshop, illustrator],
  info: [
    {
      header: "Project Overview",
      bullets: [
        "The Energy Advisor application represents a groundbreaking solution within the Industrial Internet of Things (IIoT) domain, redefining the monitoring of energy and utility costs.",
      ],
    },
    {
      header: "Energy Management Software",
      bullets: [
        "Serving as an advanced energy management software, the Energy Advisor application empowers users with control over energy consumption and other utilities within production environments",
        "Its sophisticated features enable real-time measurements and calculations, facilitating the identification of deviations, losses, and opportunities for optimization.",
      ],
    },
    {
      header: "User-Friendly Interface",
      bullets: [
        "The project prioritizes simplicity and clarity, ensuring a user-friendly experience for all stakeholders.",
        "Through intuitive data visualization techniques, the interface enables users to navigate and interpret complex information effortlessly, enhancing decision-making processes.",
      ],
    },
    {
      header: "Focus on Data Visualization",
      bullets: [
        "A key highlight of the project is its emphasis on data visualization, allowing users to gain insights at a glance.",
        "By presenting information in a clear and concise manner, the Energy Advisor application facilitates efficient analysis and actionable insights for improved energy management and cost optimization.",
      ],
    },
  ],
  colors: [
    {
      name: "icons",
      code: "#082C2C",
    },
    {
      name: "buttons",
      code: "#7E182E",
    },
    {
      name: "background",
      code: "#E1E2E6",
    },
    {
      name: "cards",
      code: "#FFFFFF",
    },
    {
      name: "section 5",
      code: "#C4A27D",
    },
  ],
  icons: icons,
  buttons: [
    {
      name: "Primary",
      image: primaryButton,
    },
  ],
  mockups: [img1, img2, img3, img4, img5, img6],
};
