import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GridPage from './pages/grid';
import SliderPage from './pages/slider';
import DetailPage from './pages/detail';

import Navbar from './components/Nav';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={SliderPage} />
      </Switch>
    </Router>
  );
}

export default App;
