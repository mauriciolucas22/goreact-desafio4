import React from 'react';

// global components
import Header from '../Header';

// local styles
import { Container, List, ProductItem } from './styles';

const Cart = () => (
  <Container>
    <Header />

    <List cellPadding={0} cellSpacing={0}>
      <thead>
        <th>PRODUTO</th>
        <th>VALOR</th>
        <th>QTD</th>
        <th>SUBTOTAL</th>
      </thead>

      <tbody>
        <ProductItem>
          <td>
            Camisa 1
            Element
          </td>
          <td>R$ 50,00</td>
          <td>
            <input
              type="text"
              value={1}
              onChange={() => {}}
            />
          </td>
          <td>R$ 50,00</td>
        </ProductItem>
      </tbody>
    </List>
  </Container>
);

export default Cart;
