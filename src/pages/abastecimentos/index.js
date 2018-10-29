import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions as DatabaseActions } from '../../store/ducks/database';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Table from '../../components/TableAbastecimentos';
import Select from '../../components/Select';

class Abastecimentos extends Component {
  static propTypes = {
    getDatabase: PropTypes.func.isRequired,
    database: PropTypes.shape().isRequired,
  };

  componentWillMount() {
    this.props.getDatabase();
    this.props.setSupply();
  }

  state = {
    valor: '',
    km: '',
    precoLitro: '',
    carroId: '',
    placa: '',
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

    if (this.state.carroId){
      this.props.getCarRequest({
        carroId: this.state.carroId,
      });
    }
  }

  render() {
    const { abastecimentos, loading, data } = this.props.database;
    return (
      <div className="container">
        <Header />
        { loading ? <Loading /> : (
          <Fragment>
            <form onSubmit={this.onSubmit}>
              <Select list={data} value={this.state.placa} open={this.state.open} handleChange={this.handleChange} handleClose={this.handleClose} handleOpen={this.handleOpen} />
              <button type="submit" class="btn btn-primary">Buscar Abastecimento</button>
              {
                abastecimentos && <Table list={abastecimentos} />
              }
            </form>
          </Fragment>
        ) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  database: state.database,
});

const mapDispatchToProps = dispatch => bindActionCreators(DatabaseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Abastecimentos);
