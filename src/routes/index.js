import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import ProductDetails from '../components/ProductDetails';
import Cart from '../components/Cart';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/product/:id" component={ProductDetails} />
    <Route exact path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
