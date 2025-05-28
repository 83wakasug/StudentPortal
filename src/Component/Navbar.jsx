import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Css/Navbar.css';

const Navbar = () => {
  return (
    <header className="bg-warning fixed-top">
      <Container fluid className="custom-navbar-container">
        <Row className="text-center py-2">
          <Col><Link to="/">Home</Link></Col>
          <Col><Link to="/courses">Courses</Link></Col>
          <Col><Link to="/news">News</Link></Col>
          <Col><Link to="/register">Register</Link></Col>
        </Row>
      </Container>
    </header>
  );
}

export default Navbar;