import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as DatabaseActions } from '../../store/ducks/database';

// local styles
import { Container, Content, Details } from './styles';

// global Components
import Header from '../Header';

class ProductDetails extends Component {
  componentWillMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    const { productSelected, loading } = this.props.database;
    return (
      <Container>
        <Header />
        { loading ? <i className="fa fa-spinner" /> : (
          <Content>
            <img src={productSelected.image} alt="product" />
            <Details>
              <strong>Camiseta Hyperas Preta</strong>
              <small>Quiksilver</small>
              <p>R$ 49.99</p>
              <button type="button" onClick={() => {}}>Adicionar ao carrinho</button>
            </Details>
          </Content>
        ) }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  database: state.database,
});

const mapDispatchToProps = dispatch => bindActionCreators(DatabaseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
