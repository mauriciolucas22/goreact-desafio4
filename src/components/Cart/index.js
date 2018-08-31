import React, { Component, Fragment } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { Actions as CartActions } from '../../store/ducks/cart';

// global components
import Header from '../Header';

import ProductItem from './ProductItem';

// local styles
import {
  Container, List, Empty, Total,
} from './styles';

class Cart extends Component {
  componentDidMount() {
    this.props.getCart();
  }

  renderList = () => (
    <Fragment>
      <List cellPadding={0} cellSpacing={0}>
        <thead>
          <th>
                  PRODUTO
          </th>
          <th>
                  VALOR
          </th>
          <th>
                  QTD
          </th>
          <th>
                  SUBTOTAL
          </th>
        </thead>

        <tbody>
          { this.props.cart.data.map(product => (
            <ProductItem key={product.id} product={product} />
          )) }

        </tbody>
      </List>
      <Total>
        <small id="total">TOTAL</small>
        <strong id="subTotal">R$ {this.props.cart.subTotal}</strong>
      </Total>
    </Fragment>
  );

  render() {
    return (
      <Container>
        <Header />

        { this.props.cart.data.length ? (
          this.renderList()
        ) : (
          <Empty>
            <i className="fa fa-shopping-cart" />
          </Empty>
        ) }


      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProsp = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProsp)(Cart);
