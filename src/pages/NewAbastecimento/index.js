import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions as DatabaseActions } from '../../store/ducks/database';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Select from '../../components/Select';
import Snackbar from '../../components/Snackbar';

class Abastecimentos extends Component {
  static propTypes = {
    getDatabase: PropTypes.func.isRequired,
    database: PropTypes.shape().isRequired,
  };

  componentWillMount() {
    this.props.getDatabase();
  }

  state = {
    valor: '',
    km: '',
    precoLitro: '',
    carroId: '',
    open: false,
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false, placa: this.state.age });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      valor,
      km,
      precoLitro,
      carroId,
    } = this.state;

    if (carroId) {
      this.props.createAbastecimentoRequest({
        valor,
        km,
        precoLitro,
        carroId,
      });
    }
  }

  render() {
    const { abastecimentos, loading, data } = this.props.database;
    return (
      <div className="container">
        <Header />
        <Snackbar variant="success" message="Abastecimento Criado" />
        <form onSubmit={this.onSubmit}>
          <Select list={data} value={this.state.placa} open={this.state.open} handleChange={this.handleChange} handleClose={this.handleClose} handleOpen={this.handleOpen} />
          <div class="form-group">
            <label >Valor</label>
            <input type="text" class="form-control" name="valor" onChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label >Km</label>
            <input type="text" class="form-control" name="km" onChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label >Preço Litro</label>
            <input type="text" class="form-control" name="precoLitro" onChange={this.handleChange} />
          </div>
          <button type="submit" class="btn btn-primary">Adicionar Abastecimento</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  database: state.database,
});

const mapDispatchToProps = dispatch => bindActionCreators(DatabaseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Abastecimentos);
