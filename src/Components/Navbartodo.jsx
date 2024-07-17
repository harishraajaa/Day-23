import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navbartodo() {
  return <>

      <Navbar fixed='top' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Harish Corporation</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/mytodos'>My Todos</Link>
            &nbsp;
            &nbsp;
            <Link to='/addtodo'>Add Todo</Link>
          </Nav>
        </Container>
      </Navbar>
  </>
}

export default Navbartodo;