import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Carros from '../pages/carros';
import Abastecimentos from '../pages/abastecimentos';
import NewCarro from '../pages/NewCarro';
import NewAbastecimento from '../pages/NewAbastecimento';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/carros" component={Carros} />
    <Route exact path="/abastecimentos" component={Abastecimentos} />
    <Route exact path="/abastecimentos/new" component={NewAbastecimento} />
    <Route exact path="/carros/new" component={NewCarro} />
  </Switch>
);

export default Routes;
