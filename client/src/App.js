import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import homePage from './pages/home';
import Navbar from './components/Nav';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={homePage} />
      </Switch>
    </Router>
  );
}

export default App;
