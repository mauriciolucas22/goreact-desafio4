import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { Actions as CartActions } from '../../../store/ducks/cart';

// styles
import { TR } from './styles';

class ProductItem extends Component {
  state = {
    amount: '1',
    index: 0,
  };

  handleChangeAmount = (e, productId) => {
    const { changeAmount } = this.props;
    changeAmount({
      newAmount: e.target.value,
      productId,
    });
    this.setState({ amount: String(e.target.value) });
  };

  render() {
    const { product, removeFromCart } = this.props;
    const { amount } = this.state;
    return (
      <TR key={product.id}>
        <td>
          {product.name}
        </td>
        <td>
          {product.price}
        </td>
        <td>
          <input
            type="text"
            value={amount}
            onChange={e => this.handleChangeAmount(e, product.id)}
          />
        </td>
        <td>
          {product.subTotal}
        </td>
        <td>
          <button type="button" onClick={() => removeFromCart(product.id)}>
            <i className="fa fa-times" />
          </button>
        </td>
      </TR>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(ProductItem);
