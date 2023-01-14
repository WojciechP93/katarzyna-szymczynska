import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap/';
import NavbarComponent from './navbar/NavbarComponent';
import HomeComponent from './home/HomeComponent';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Container fluid id="mainContainer">
        <Row className="navbar-row">

        </Row>
        <Row>
          <Col>
            <Routes>
              <Route path="/home" element={<HomeComponent />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
