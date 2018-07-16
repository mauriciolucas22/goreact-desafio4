import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import ProductDetails from '../components/ProductDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/product" component={ProductDetails} />
  </Switch>
);

export default Routes;
