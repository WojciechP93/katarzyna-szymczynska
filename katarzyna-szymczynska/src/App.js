import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate, HashRouter } from "react-router-dom";
import { Container, Row } from "react-bootstrap/";
import HomeComponent from "./home/HomeComponent";
import SubjectComponent from "./home/portfolio/SubjectComponent";
import GaleryComponent from "./home/portfolio/GaleryComponent";
import ScrollToTop from "./ScrollToTop";

import { ps4bcData } from "./home/portfolio/data/ps4bc-data";
import { hanData } from "./home/portfolio/data/han-data";
import { ecoData } from "./home/portfolio/data/eco-data";
import { tapitData } from "./home/portfolio/data/tapit-data";
import { bssData } from "./home/portfolio/data/bss-data";
import { hahData } from "./home/portfolio/data/hah-data";
import { zoocialData } from "./home/portfolio/data/zoocial-data";
import { evoData } from "./home/portfolio/data/evo-data";
import { parvisData } from "./home/portfolio/data/parvis-data";
import { energuadvisorData } from "./home/portfolio/data/energuadvisor-data";
import { amkData } from "./home/portfolio/data/amk-data";
import { equiappData } from "./home/portfolio/data/equiapp-data";

import { ps4bcBodyData } from "./home/portfolio/data/body/ps4bc-data";
import { hanBodyData } from "./home/portfolio/data/body/han-data";
import { tapitBodyData } from "./home/portfolio/data/body/tapit-data";
import { bssBodyData } from "./home/portfolio/data/body/bss-data";
import { parvisBodyData } from "./home/portfolio/data/body/parvis-data";
import { espressoBodyData } from "./home/portfolio/data/body/espresso-data";
import { remaBodyData } from "./home/portfolio/data/body/rema-data";
import { equiappBodyData } from "./home/portfolio/data/body/equiapp-data";

import { pourData } from "./home/portfolio/data/spirit/pour-data";
import { oilData } from "./home/portfolio/data/spirit/oil-data";
import { acrylicData } from "./home/portfolio/data/spirit/acrylic-data";
import { watercolorData } from "./home/portfolio/data/spirit/watercolor-data";
import { pencilData } from "./home/portfolio/data/spirit/pencil-data";
import { drawingsData } from "./home/portfolio/data/spirit/drawings-data";
import { muralsData } from "./home/portfolio/data/spirit/murals-data";
import { digitalData } from "./home/portfolio/data/spirit/digital-data";
import { otherData } from "./home/portfolio/data/spirit/other-data";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Container fluid className="main-container">
        <Row>
          <Routes>
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/portfolio/mind" element={<SubjectComponent subjectTitle="mind" />} />
            <Route path="/portfolio/body" element={<SubjectComponent subjectTitle="body" />} />
            <Route path="/portfolio/spirit" element={<SubjectComponent subjectTitle="spirit" />} />

            <Route path="/portfolio/mind/ps4bc" element={<GaleryComponent projectData={ps4bcData} />} />
            <Route path="/portfolio/mind/han" element={<GaleryComponent projectData={hanData} />} />
            <Route path="/portfolio/mind/eco-flavours" element={<GaleryComponent projectData={ecoData} />} />
            <Route path="/portfolio/mind/tapit" element={<GaleryComponent projectData={tapitData} />} />
            <Route path="/portfolio/mind/bss" element={<GaleryComponent projectData={bssData} />} />
            <Route path="/portfolio/mind/hah" element={<GaleryComponent projectData={hahData} />} />
            <Route path="/portfolio/mind/zoocial" element={<GaleryComponent projectData={zoocialData} />} />
            <Route path="/portfolio/mind/evo" element={<GaleryComponent projectData={evoData} />} />
            <Route path="/portfolio/mind/parvis" element={<GaleryComponent projectData={parvisData} />} />
            <Route path="/portfolio/mind/energuadvisor" element={<GaleryComponent projectData={energuadvisorData} />} />
            <Route path="/portfolio/mind/amk" element={<GaleryComponent projectData={amkData} />} />
            <Route path="/portfolio/mind/equiapp" element={<GaleryComponent projectData={equiappData} />} />

            <Route path="/portfolio/body/ps4bc" element={<GaleryComponent projectData={ps4bcBodyData} />} />
            <Route path="/portfolio/body/han" element={<GaleryComponent projectData={hanBodyData} />} />
            <Route path="/portfolio/body/tapit" element={<GaleryComponent projectData={tapitBodyData} />} />
            <Route path="/portfolio/body/bss" element={<GaleryComponent projectData={bssBodyData} />} />
            <Route path="/portfolio/body/parvis" element={<GaleryComponent projectData={parvisBodyData} />} />
            <Route path="/portfolio/body/espresso" element={<GaleryComponent projectData={espressoBodyData} />} />
            <Route path="/portfolio/body/rema" element={<GaleryComponent projectData={remaBodyData} />} />
            <Route path="/portfolio/body/equiapp" element={<GaleryComponent projectData={equiappBodyData} />} />

            <Route path="/portfolio/spirit/pour" element={<GaleryComponent projectData={pourData} />} />
            <Route path="/portfolio/spirit/oil" element={<GaleryComponent projectData={oilData} />} />
            <Route path="/portfolio/spirit/acrylic" element={<GaleryComponent projectData={acrylicData} />} />
            <Route path="/portfolio/spirit/watercolor" element={<GaleryComponent projectData={watercolorData} />} />
            <Route path="/portfolio/spirit/pencil" element={<GaleryComponent projectData={pencilData} />} />
            <Route path="/portfolio/spirit/drawings" element={<GaleryComponent projectData={drawingsData} />} />
            <Route path="/portfolio/spirit/murals" element={<GaleryComponent projectData={muralsData} />} />
            <Route path="/portfolio/spirit/digital" element={<GaleryComponent projectData={digitalData} />} />
            <Route path="/portfolio/spirit/other" element={<GaleryComponent projectData={otherData} />} />
          </Routes>
        </Row>
      </Container>
    </HashRouter>
  );
}

export default App;
