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
          </Routes>
        </Row>
      </Container>
    </HashRouter>
  );
}

export default App;
