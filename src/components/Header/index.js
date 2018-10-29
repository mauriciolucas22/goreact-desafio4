import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//
import { Actions as DatabaseActions } from '../../store/ducks/database';

import { Container, MenuList } from './styles';

const Header = ({ getDatabase }) => (
  <Fragment>
    <Container>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>
          Meus Carros
        </h1>
      </Link>
    </Container>

    <MenuList>
      <button type="button" onClick={() => getDatabase(1)}>
        <Link to="/">
        Home
        </Link>
      </button>

      <button type="button">
        <Link to="/carros/new">
        Novo Carro
        </Link>
      </button>

      <button type="button" onClick={() => getDatabase(3)}>
        <Link to="/abastecimentos">
        Abastecimentos
        </Link>
      </button>
      <button type="button">
        <Link to="/abastecimentos/new">
        Novo Abastecimento
        </Link>
      </button>
    </MenuList>
  </Fragment>
);

Header.propTypes = {
  getDatabase: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(DatabaseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
