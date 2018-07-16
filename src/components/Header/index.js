import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Container, MenuList } from './styles';

const Header = () => (
  <Fragment>
    <Container>
      <h1>
        GoCommerce
      </h1>
      <Link to="/cart">
        <small>
          <i className="fa fa-shopping-cart" />
              Meu carrinho (3)
        </small>
      </Link>
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
