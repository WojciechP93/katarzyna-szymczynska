import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap/';
import NavbarComponent from './navbar/NavbarComponent';

function App() {
  return (
    <BrowserRouter>
      <Container fluid id="mainContainer">
        <Row>
          <Col>
            <NavbarComponent />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
