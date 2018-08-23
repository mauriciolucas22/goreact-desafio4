import React, { Component } from 'react';

import { debounce } from 'lodash';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { Actions as CartActions } from '../../store/ducks/cart';

// global components
import Header from '../Header';

// local styles
import {
  Container, List, ProductItem, Empty,
} from './styles';

class Cart extends Component {
  state = {
    amount: '1',
  }

  componentDidMount() {
    this.props.getCart();
  }

  handleCountItems = () => {};

  changeAmount = (e, productId) => {
    this.props.changeAmount({
      newAmount: e.target.value,
      productId,
    });
  };

  renderList = () => (
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
          <ProductItem key={product.id}>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <input
              type="text"
              value={this.state.amount}
              onChange={e => this.changeAmount(e, product.id)}
            />
          </td>
          <td>{product.subTotal}</td>
          <td>
            <button type="button" onClick={() => this.props.removeFromCart(product.id)}>
              <i className="fa fa-times" />
            </button>
          </td>
        </ProductItem>
        )) }

      </tbody>
    </List>
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
