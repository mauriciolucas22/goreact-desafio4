import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions as DatabaseActions } from '../../store/ducks/database';

import { Container } from './styles';

import ListItem from './components/ListItem';

import Header from '../../components/Header';

class Home extends Component {
  static propTypes = {
    getDatabase: PropTypes.func.isRequired,
    database: PropTypes.shape().isRequired,
  };

  componentWillMount() {
    this.props.getDatabase();
  }

  render() {
    const { data } = this.props.database;
    return (
      <Container>
        <Header />
        { data && <ListItem database={data} />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  database: state.database,
});

const mapDispatchToProps = dispatch => bindActionCreators(DatabaseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
