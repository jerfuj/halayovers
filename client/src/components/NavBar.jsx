import React from 'react';
import styles from './App.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types';

const NavBar = ({ cities }) => {
  const logOut = () => {
    sessionStorage.removeItem('token');
  }

  return (
    <Navbar sticky="top" expand="sm">
      <Navbar.Brand href="/">
        <Navbar.Text>
          <h3 className={styles.title}>HALayovers</h3>
        </Navbar.Text>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Cities" id="basic-nav-dropdown">
            {cities.map(city => (
              <NavDropdown.Item key={city.airport_code} href={`/${city.airport_code}`} className={styles.dropdownItem}>{city.airport_code}</NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/" onClick={logOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

NavBar.propTypes = {
  cities: PropTypes.instanceOf(Array).isRequired,
}


export default NavBar;