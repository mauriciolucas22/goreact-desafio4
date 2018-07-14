import React, { Component } from 'react';

import { Container, Header, MenuList } from './styles';

class Home extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Header>
          <h1>GoCommerce</h1>
          <small><i class="fa fa-shopping-cart" /> Meu carrinho (3)</small>
        </Header>

        <MenuList>
          <button type="button" onClick={() => {}}>Camisetas</button>
          <button type="button" onClick={() => {}}>Camisetas</button>
          <button type="button" onClick={() => {}}>Camisetas</button>
        </MenuList>
      </Container>
    );
  }
}

export default Home;
