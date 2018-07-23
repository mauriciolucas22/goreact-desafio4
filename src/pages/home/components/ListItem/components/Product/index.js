import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Product = ({ product }) => (
  <Container>
    <Link to="/product">
      <img src={product.image} alt={product.brand} />
    </Link>
    <strong>{product.name}</strong>
    <small>{product.brand}</small>
    <p className="preco">R$ {product.price}</p>
  </Container>
);

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    brand: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default Product;
