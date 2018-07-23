import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { Actions as CartActions } from '../../store/ducks/cart';

// global components
import Header from '../Header';

// local styles
import { Container, List, ProductItem } from './styles';

class Cart extends Component {
  componentDidMount() {
    this.props.getCart();
  }

  render() {
    return (
      <Container>
        <Header />

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
            <ProductItem>
              <td>
                Camisa 1
                Element
              </td>
              <td>
                R$ 50,00
              </td>
              <td>
                <input
                  type="text"
                  value={1}
                  onChange={() => {}}
                />
              </td>
              <td>
                R$ 50,00
              </td>
            </ProductItem>
          </tbody>
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProsp = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProsp)(Cart);
