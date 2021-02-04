import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import homePage from './pages/home';
import adminPage from './pages/admin';
import detailPage from './pages/detail';

import { SearchProvider } from './utils/searchContext';

const App = () => {
  return (
    <SearchProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={homePage} />
          <Route exact path={["/admin", "/admin/page/:pageNumber"]} component={adminPage} />
          <Route exact path='/admin/product/:id' component={detailPage} />
        </Switch>
      </Router>
    </SearchProvider>
  );
}

export default App;
