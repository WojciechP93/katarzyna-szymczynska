import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap/';
import NavbarComponent from './navbar/NavbarComponent';
import HomeComponent from './home/HomeComponent';
import UiUxAndWebDesignComponent from './home/portfolio/ui-ux-and-web-design/UiUxAndWebDesignComponent';
import EquiAppComponent from './home/portfolio/ui-ux-and-web-design/equii-app/EquiAppComponent';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Container fluid className='main-container'>
        <Row>
          <Routes>
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/portfolio/ui-ux-and-web-design-component" element={<UiUxAndWebDesignComponent />} />
            <Route path="/portfolio/ui-ux-and-web-design-component/equi-app" element={<EquiAppComponent />} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
