import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { LinkContainer } from 'react-router-bootstrap';

export default function NavigationBar() {
  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/Signup'>
            <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>
      </Container>
    </Navbar>

  )
}
