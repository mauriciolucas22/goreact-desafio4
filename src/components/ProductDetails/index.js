import React from 'react';

// local styles
import { Container, Content, Details } from './styles';

// global Components
import Header from '../Header';

const ProductDetails = () => (
  <Container>
    <Header />
    <Content>
      <img src="https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg" alt="product" />
      <Details>
        <strong>Camiseta 1</strong>
        <small>Element</small>
        <p>R$ 50,00</p>
        <button type="button" onClick={() => {}}>Adicionar ao carrinho</button>
      </Details>
    </Content>
  </Container>
);

export default ProductDetails;
