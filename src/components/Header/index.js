import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

import { Container, MenuList } from './styles';

const Header = ({ lengthCart }) => (
  <Fragment>
    <Container>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>
          GoCommerce
        </h1>
      </Link>
      <Link to="/cart">
        <small>
          <i className="fa fa-shopping-cart" />
              Meu carrinho ({lengthCart})
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

const mapStateToProps = state => ({
  lengthCart: state.cart.data.length,
});

export default connect(mapStateToProps)(Header);
