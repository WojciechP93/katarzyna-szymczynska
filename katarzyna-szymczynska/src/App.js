import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap/';
import NavbarComponent from './navbar/NavbarComponent';
import HomeComponent from './home/HomeComponent';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Container fluid className='main-container'>
        <Row>
          <Routes>
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
