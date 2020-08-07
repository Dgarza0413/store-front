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
        <Route exact path="/" component={GridPage} />
        <Route exact path="/slider" component={SliderPage} />
        <Route exact path="/detail" component={DetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
