import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import Home from './home/Home.jsx';
import City from './city/City.jsx';
import styles from './App.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <div>
      <div className={styles.nav}>
        <a href="/">
          <img
            src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/HA+Logo.png"
            className={styles.logo}
          />
        </a>
      </div>
      <Router>
        <ScrollToTop />
        <div className={styles.app}>
          <div className={styles.innerApp}>
            <Switch>
              <Route path="/" exact>
                <Home />
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
