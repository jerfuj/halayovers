import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home/Home.jsx';
import City from './city/City.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:id">
            <City />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;