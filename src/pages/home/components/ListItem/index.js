import React from 'react';
import PropTypes from 'prop-types';

import { ProductList } from './styles';

import Product from './components/Product';

const ListItem = ({ database }) => (
  <ProductList>
    {database.map(product => <Product key={product.id} product={product} />)}
  </ProductList>
);

ListItem.propTypes = {
  database: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ListItem;
