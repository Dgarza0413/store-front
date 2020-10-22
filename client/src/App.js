import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import homePage from './pages/home';
import adminPage from './pages/admin';
import detailPage from './pages/detail';

// import Navbar from './components/Nav';

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={homePage} />
        <Route exact path="/admin" component={adminPage} />
        <Route exact path='/admin/product/:id' component={detailPage} />
      </Switch>
    </Router>
  );
}

export default App;
