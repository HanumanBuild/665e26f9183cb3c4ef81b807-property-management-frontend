
// App.js
// This file is the entry point for the React app. It imports all the pages and components and sets up the routing.

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* Additional routes can be added here as the application expands */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
