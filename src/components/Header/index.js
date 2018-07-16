import React, { Fragment } from 'react';

import { Container, MenuList } from './styles';

const Header = () => (
  <Fragment>
    <Container>
      <h1>
        GoCommerce
      </h1>
      <small>
        <i className="fa fa-shopping-cart" />
            Meu carrinho (3)
      </small>
    </Container>

    <MenuList>
      <button type="button" onClick={() => {}}>
        Camisetas
      </button>
      <button type="button" onClick={() => {}}>
        Camisetas
      </button>
      <button type="button" onClick={() => {}}>
        Camisetas
      </button>
    </MenuList>
  </Fragment>
);

export default Header;
