import React from 'react';
import { HashRouter as Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import Navbar from './Navbar/Navbar.js';
import HomePage from './HomePage/HomePage.js';
import ReviewDishPage from './ReviewDishPage/ReviewDishPage.js';
import FindDishPage from './FindDishPage/FindDishPage.js';

const App = () => {
  return (
    <div className="App">
      <Navbar />
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
    </div>
  );
}

export default App;
