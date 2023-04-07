import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap/';
import NavbarComponent from './navbar/ScrollSpyNavbarComponent';
import HomeComponent from './home/HomeComponent';
import UiUxAndWebDesignComponent from './home/portfolio/ui-ux-and-web-design/UiUxAndWebDesignComponent';
import EquiAppComponent from './home/portfolio/ui-ux-and-web-design/equii-app/EquiAppComponent';
import ScrollToTop from "./ScrollToTop"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Container fluid className='main-container' >
          <Row>
            <Routes>
              <Route path="/home" element={<HomeComponent />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/portfolio/ui-ux-and-web-design-component" element={<UiUxAndWebDesignComponent />} />
              <Route path="/portfolio/ui-ux-and-web-design-component/equi-app" element={<EquiAppComponent />} />
            </Routes>
          </Row>
        </Container>
      </ScrollToTop>

    </BrowserRouter>
  );
}

export default App;
