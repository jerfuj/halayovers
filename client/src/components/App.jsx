import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import Home from './home/Home.jsx';
import City from './city/City.jsx';
import styles from './App.module.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
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
  )
}

export default App;
