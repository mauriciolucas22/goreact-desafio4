import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as DatabaseActions } from '../../store/ducks/database';
import { Actions as CartActions } from '../../store/ducks/cart';

import CardContent from '../CardContent';

// local styles
import { Container, Content, Details } from './styles';

// global Components
import Header from '../Header';
import Loading from '../Loading';

class ProductDetails extends Component {
  static propTypes = {
    getProduct: PropTypes.func.isRequired,
    database: PropTypes.shape({
      productSelected: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        brand: PropTypes.string,
        price: PropTypes.number,
      }),
    }).isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    const { getProduct } = this.props;
    const { id } = this.props.match.params;
    getProduct(id);
  }

  handleAddToCart = () => {
    const { addToCart, database: { productSelected } } = this.props;
    addToCart(productSelected);
  };

  render() {
    const { database: { productSelected, loading } } = this.props;

    return (
      <Container>
        <Header />
        { loading ? <Loading /> : (
          <Content>
            { productSelected && (
              <Fragment>
                <img src={productSelected.image} alt={productSelected.brand} />
                <Details>
                  <CardContent />
                </Details>
              </Fragment>
            ) }
          </Content>
        ) }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  database: state.database,
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...DatabaseActions,
  ...CartActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
