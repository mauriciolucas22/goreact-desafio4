import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//
import { Actions as DatabaseActions } from '../../store/ducks/database';

import { Container, MenuList } from './styles';

const Header = ({ lengthCart, getDatabase }) => (
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
      <button type="button" onClick={() => getDatabase(1)}>
        <Link to="/">
        CAMISETAS
        </Link>
      </button>

      <button type="button" onClick={() => getDatabase(2)}>
        <Link to="/">
          CAMISAS
        </Link>
      </button>
      <button type="button" onClick={() => getDatabase(3)}>
        <Link to="/">
        BONÉS
        </Link>

      </button>
      <button type="button" onClick={() => getDatabase(4)}>
        <Link to="/">
        BLUSAS
        </Link>

      </button>
      <button type="button" onClick={() => getDatabase(5)}>
        <Link to="/">
        CALÇADOS
        </Link>

      </button>
      <button type="button" onClick={() => getDatabase(6)}>
        <Link to="/">
        BONÉS
        </Link>
      </button>
    </MenuList>
  </Fragment>
);

Header.propTypes = {
  getDatabase: PropTypes.func.isRequired,
  lengthCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  lengthCart: state.cart.data.length,
});

const mapDispatchToProps = dispatch => bindActionCreators(DatabaseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
