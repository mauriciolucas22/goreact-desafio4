import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//
import { Actions as DatabaseActions } from '../../store/ducks/database';

import { Container, MenuList } from './styles';

const Header = ({ lengthCart, getCategories }) => (
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
      <button type="button" onClick={() => getCategories(1)}>
        CAMISETAS
      </button>
      <button type="button" onClick={() => getCategories(2)}>
        CAMISAS
      </button>
      <button type="button" onClick={() => getCategories(3)}>
        BONÉS
      </button>
      <button type="button" onClick={() => getCategories(4)}>
        BLUSAS
      </button>
      <button type="button" onClick={() => getCategories(5)}>
        CALÇADOS
      </button>
      <button type="button" onClick={() => getCategories(6)}>
        BONÉS
      </button>
    </MenuList>
  </Fragment>
);

Header.propTypes = {
  getCategories: PropTypes.func.isRequired,
  lengthCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  lengthCart: state.cart.data.length,
});

const mapDispatchToProps = dispatch => bindActionCreators(DatabaseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
