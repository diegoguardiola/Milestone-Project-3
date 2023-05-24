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
            <>
              {user.email}
              <Link className='nav-link' to='/' onClick={handleClick}>Log out</Link>
              <Link className='nav-link' to='/'>Home</Link>
            </>
          )}
          {!user && (
            <>
              <Link className='nav-link' to='/'>Home</Link>
              <Link className ='nav-link' to="/login">Login</Link>
              <Link className='nav-link' to='/signup'> Signup</Link>
            </>
          )}
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
