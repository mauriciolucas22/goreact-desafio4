import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as DatabaseActions } from '../../store/ducks/database';

// local styles
import { Container, Content, Details } from './styles';

// global Components
import Header from '../Header';

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

  render() {
    const { productSelected } = this.props.database;
    return (
      <Container>
        <Header />
        { this.props.loading ? <p>loading</p> : (
          <Content>
            { productSelected && (
              <Fragment>
                <img src={productSelected.image} alt={productSelected.brand} />
                <Details>
                  <strong>{productSelected.name}</strong>
                  <small>{productSelected.brand}</small>
                  <p>R$ {productSelected.price}</p>
                  <button type="button" onClick={() => {}}>Adicionar ao carrinho</button>
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
});

const mapDispatchToProps = dispatch => bindActionCreators(DatabaseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
