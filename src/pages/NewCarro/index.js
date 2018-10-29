import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions as DatabaseActions } from '../../store/ducks/database';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Snackbar from '../../components/Snackbar';

class NewCarro extends Component {
  static propTypes = {
    getDatabase: PropTypes.func.isRequired,
    database: PropTypes.shape().isRequired,
  };

  state = {
    id: Math.random(),
    placa: '',
    marca: '',
    modelo: '',
    abastecimentos: [],
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.newCarRequest({ ...this.state });

    this.setState = {
      id: Math.random(),
      placa: '',
      marca: '',
      modelo: '',
      abastecimentos: [],
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { data, loading } = this.props.database;
    return (
      <div className="container">
        <Snackbar variant="success" message="Carro Criado" />
        <Header />
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label >Placa</label>
            <input type="text" class="form-control" name="placa" onChange={this.onChange} />
          </div>
          <div class="form-group">
            <label >Marca</label>
            <input type="text" class="form-control" name="marca" onChange={this.onChange} />
          </div>
          <div class="form-group">
            <label >Modelo</label>
            <input type="text" class="form-control" name="modelo" onChange={this.onChange} />
          </div>
          <button type="submit" class="btn btn-primary">Adicionar Carro</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  database: state.database,
});

const mapDispatchToProps = dispatch => bindActionCreators(DatabaseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewCarro);
