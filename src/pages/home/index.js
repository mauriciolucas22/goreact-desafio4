import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions as DatabaseActions } from '../../store/ducks/database';

import { Container, Header, MenuList } from './styles';

import ListItem from './components/ListItem';

class Home extends Component {
  state = {};

  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Container>
        <Header>
          <h1>GoCommerce</h1>
          <small><i class="fa fa-shopping-cart" />Meu carrinho (3)</small>
        </Header>

        <MenuList>
          <button type="button" onClick={() => {}}>Camisetas</button>
          <button type="button" onClick={() => {}}>Camisetas</button>
          <button type="button" onClick={() => {}}>Camisetas</button>
        </MenuList>

        <ListItem />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  database: state.database,
});

const mapDispatchToProps = dispatch => bindActionCreators(DatabaseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
