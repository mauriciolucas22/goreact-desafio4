import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions as DatabaseActions } from '../../store/ducks/database';

import { Container } from './styles';

import ListItem from './components/ListItem';

import Header from '../../components/Header';

class Home extends Component {
  state = {};

  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Container>
        <Header />
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
