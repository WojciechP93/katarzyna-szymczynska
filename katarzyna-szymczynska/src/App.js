import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate, HashRouter } from "react-router-dom";
import { Container, Row } from "react-bootstrap/";
import HomeComponent from "./home/HomeComponent";
import SubjectComponent from "./home/portfolio/SubjectComponent";
import GaleryComponent from "./home/portfolio/GaleryComponent";
import ScrollToTop from "./ScrollToTop";

import EquiAPP from "./images/portfolio/uiux/subjects/EquiAPP-mockup1.png";
import Parvis from "./images/portfolio/uiux/subjects/Parvis-mockup1.png";
import Tapit from "./images/portfolio/uiux/subjects/tapi-website-mockup1.png";
import TapitM from "./images/portfolio/uiux/subjects/tapit-mobile-mockup1.png";
import TapitC from "./images/portfolio/uiux/subjects/tapi-customer-app-mockup1.png";
import Cat from "./images/portfolio/uiux/subjects/cat-mockup1.png";
import Mti from "./images/portfolio/uiux/subjects/mti-mockup1.png";
import Aviator from "./images/portfolio/uiux/subjects/aviator-mockup1.png";
import Versant from "./images/portfolio/uiux/subjects/versant-mockup1.png";
import Jgl from "./images/portfolio/uiux/subjects/jgl-mockup1.png";

import EquiAPP_1 from "./images/portfolio/uiux/subjects/equii-app/EquiAPP_1.png";
import EquiAPP_2 from "./images/portfolio/uiux/subjects/equii-app/EquiAPP_2.png";
import EquiAPP_3 from "./images/portfolio/uiux/subjects/equii-app/EquiAPP_3.png";
import EquiAPP_4 from "./images/portfolio/uiux/subjects/equii-app/EquiAPP_4.png";
import EquiAPP_5 from "./images/portfolio/uiux/subjects/equii-app/EquiAPP_5.png";
import EquiAPP_6 from "./images/portfolio/uiux/subjects/equii-app/EquiAPP_6.png";
import EquiAPP_7 from "./images/portfolio/uiux/subjects/equii-app/EquiAPP_7.png";
import EquiAPP_8 from "./images/portfolio/uiux/subjects/equii-app/EquiAPP_8.jpg";

function App() {
  var equiapp = [EquiAPP_1, EquiAPP_2, EquiAPP_3, EquiAPP_4, EquiAPP_5, EquiAPP_6, EquiAPP_7, EquiAPP_8];

  var uiux = [
    {
      image: EquiAPP,
      title: "EquiAPP",
      description: "Design of a mobile application for horse riding enthusiasts, diploma design.",
      path: "equi-app",
    },
    {
      image: Parvis,
      title: "PARVIS website",
      description: "Website design for apartment rental services.",
      path: "ui-ux-and-web-design-component/equi-app",
    },
    {
      image: Tapit,
      title: "TapIT website",
      description: "Website design for a startup. Description of the business using infographics, photos ...",
      path: "ui-ux-and-web-design-component/equi-app",
    },
    {
      image: TapitM,
      title: "TapIT app",
      description: "Mobile and desktop application project for TapIT company. The application allows...",
      path: "ui-ux-and-web-design-component/equi-app",
    },
    {
      image: TapitC,
      title: "TapIT Customer app",
      description: "A mobile application designed for pub customers. It allows you to create ...",
      path: "ui-ux-and-web-design-component/equi-app",
    },
    {
      image: Cat,
      title: "CAT app",
      description: "Classification App for Tools - Oerlikon Balzers.",
      path: "ui-ux-and-web-design-component/equi-app",
    },
    {
      image: Mti,
      title: "MTI",
      description: "The MTI application allows you to track the working hours of various machines in your area.",
      path: "ui-ux-and-web-design-component/equi-app",
    },
    {
      image: Aviator,
      title: "AVIATOR-1",
      description: "Design of the interface of the application used to operate the flight simulator...",
      path: "ui-ux-and-web-design-component/equi-app",
    },
    {
      image: Versant,
      title: "Versant",
      description: "Educational platform project. The application allows you to check your level of English...",
      path: "ui-ux-and-web-design-component/equi-app",
    },
    {
      image: Jgl,
      title: "JGL",
      description: "A few screens of an app which allows the user to manage machines and machines ...",
      path: "ui-ux-and-web-design-component/equi-app",
    },
  ];

  return (
    <HashRouter>
      <ScrollToTop />
      <Container fluid className="main-container">
        <Row>
          <Routes>
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route
              path="/portfolio/ui-ux-and-web-design-component"
              element={<SubjectComponent items={uiux} subjectTitle="UI/UX and web design" />}
            />
            <Route
              path="/portfolio/ui-ux-and-web-design-component/equi-app"
              element={
                <GaleryComponent
                  images={equiapp}
                  subjectPath="ui-ux-and-web-design-component"
                  subjectName="UI/UX and web design"
                />
              }
            />
          </Routes>
        </Row>
      </Container>
    </HashRouter>
  );
}

export default App;
