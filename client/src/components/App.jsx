import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home/Home.jsx';
import City from './city/City.jsx';
import styles from './App.module.css';

const App = () => {
  return (
    <Router>
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