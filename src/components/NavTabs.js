import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#invoice"
        >Invoice-Generator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </Nav.Link>
            <NavDropdown title="Clients" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Client ABX</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1.1">Project A</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1.2">Project B</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1.3">Project C</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Client XYZ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2.1">Project X</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2.2">Project Y</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2.3">Project Z</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Client 123</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3.1">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3.2">Project 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3.3">Project 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#clients"
                onClick={() => handlePageChange('Clients')}
                className={currentPage === 'Clients' ? 'nav-link active' : 'nav-link'}
              >
                View All Clients
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="#signup"
              onClick={() => handlePageChange('Signup')}
              className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
            >Signup</Nav.Link>
            <Nav.Link href="#login"
              onClick={() => handlePageChange('Login')}
              className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
            >Login</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;