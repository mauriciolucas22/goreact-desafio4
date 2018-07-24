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
    const { productSelected, loading } = this.props;
    console.tron.log(this.props.database);
    return (
      <Container>
        <Header />
        { loading ? <i className="fa fa-spinner" /> : (
          <Content>
            <img src="https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg" alt="product" />
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
