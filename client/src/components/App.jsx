import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import $ from 'jquery';
import Home from './home/Home.jsx';
import City from './city/City.jsx';
import NavBar from './NavBar.jsx';
import Login from './Login.jsx';
import styles from './App.module.css';

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
  console.log(token);

  return (
    <div>
      <NavBar cities={cities}/>
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
