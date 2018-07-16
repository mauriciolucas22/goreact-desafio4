import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Product = () => (
  <Container>
    <Link to="/product">
      <img src="https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg" alt="product" />
    </Link>
    <strong>Camiseta A</strong>
    <small>Element</small>
    <p className="preco">R$ 50,00</p>
  </Container>
);

export default Product;
