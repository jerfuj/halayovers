import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import $ from 'jquery';
import Home from './home/Home.jsx';
import City from './city/City.jsx';
import Login from './Login.jsx';
import styles from './App.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const [cities, setCities] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem('token'));

  useEffect(() => {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/cities',
      success: (data) => {
        setCities(data);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }, [])

  if (!token) {
    return (
      <Login setToken={setToken} />
    )
  }

  return (
    <div>
      <Navbar sticky="top" expand="sm">
        <Navbar.Brand href="/">
          <img
            alt="Hawaiian Airlines Logo"
            src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/HA+Logo.png"
            height="45"
            className="d-inline-block align-top"
          />{' '}
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
          <Navbar.Text>
            <h3 className={`${styles.title} d-none d-sm-block`}>Layover Info &amp; Tips</h3>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Router>
        <ScrollToTop />
        <div className={styles.app}>
          <div className={styles.innerApp}>
            <Switch>
              <Route path="/" exact>
                <Home cities={cities}/>
              </Route>
              <Route path="/:id">
                <City />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App;
