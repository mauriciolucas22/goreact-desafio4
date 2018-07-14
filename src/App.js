import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';
import './styles/global';

import Home from './pages/home';

import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>
);

export default App;
