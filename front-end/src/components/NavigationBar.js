import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

// React-Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Navibar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className="me-auto">
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
              <Nav.Link to="/"><Link to='/'>Home</Link></Nav.Link>
            </div>
          )}
          {!user && (
            <div>
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/login">Login</Nav.Link>
              <Nav.Link to="/signup">Signup</Nav.Link>
            </div>
          )}
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
