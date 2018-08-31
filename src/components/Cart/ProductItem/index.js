import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  };

  static propTypes = {
    changeAmount: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    product: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      id: PropTypes.number,
      subTotal: PropTypes.number,
    }).isRequired,
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
      <TR>
        <td id="name">
          <strong>{product.name}</strong>
          <small>{product.brand}</small>
        </td>
        <td id="price">
          {product.price}
        </td>
        <td>
          <input
            id="count"
            type="text"
            value={amount}
            onChange={e => this.handleChangeAmount(e, product.id)}
          />
        </td>
        <td id="price">
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
