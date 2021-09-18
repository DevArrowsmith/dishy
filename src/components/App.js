import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import NavBar from './NavBar/NavBar.js';
import HomePage from './HomePage/HomePage.js';
import ReviewDishPage from './ReviewDishPage/ReviewDishPage.js';
import FindDishPage from './FindDishPage/FindDishPage.js';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <HomePage />
            )}
          />

          <Route
            exact
            path="/review"
            component={() => (
              <ReviewDishPage />
            )}
          />

          <Route
            exact
            path="/find"
            component={() => (
              <FindDishPage />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
