import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.png';

function NavbarCommon() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img src={logo} alt="mcruz fernandes Macedo de Cavaleiros" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/sobre">Sobre Nós</Nav.Link>
          <NavDropdown title="Serviços" id="collasible-nav-dropdown">
            <NavDropdown.Item href="servicos/reboque">Reboque</NavDropdown.Item>
            <NavDropdown.Item href="/servicos/mecanica">
              Mecânica
            </NavDropdown.Item>
            <NavDropdown.Item href="/servicos/pneus">Pneus</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/servicos/chaparia">
              Chaparia Mestra
            </NavDropdown.Item>
            <NavDropdown.Item href="/servicos/pintura">
              Pintura
            </NavDropdown.Item>
            <NavDropdown.Item href="/servicos/venda">
              Venda/Aluguer de automóveis
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
              Instalação de PowerCell
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/galeria">Galeria</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/contacto">Contactos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarCommon;
