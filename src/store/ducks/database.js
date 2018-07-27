import Immutable from 'seamless-immutable';

export const Types = {
  GET: 'database/GET',
  GET_PRODUCT: 'database/GET_PRODUCT',
  SET: 'database/SET',
  SET_PRODUCT_SELECTED: 'database/SET_PRODUCT_SELECTED',
  ERROR: 'database/ERROR',
};

const INITAL_STATE = Immutable({
  data: [],
  productSelected: null,
  loading: false,
  error: false,
});

export default function database(state = INITAL_STATE, action) {
  switch (action.type) {
    case Types.GET:
      return { ...state, loading: true };

    case Types.SET:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false,
      };

    case Types.GET_PRODUCT:
      return { ...state, loading: true };

    case Types.SET_PRODUCT_SELECTED:
      return {
        data: state.data,
        productSelected: action.payload.productObject,
        error: false,
        loading: false,
      };

    case Types.ERROR:
      return { ...state, error: action.payload.message };

    default:
      return state;
  }
}

export const Actions = {
  getDatabase: () => ({
    type: Types.GET,
  }),

  saveData: data => ({
    type: Types.SET,
    payload: { data },
  }),

  getProduct: productID => ({
    type: Types.GET_PRODUCT,
    payload: { productID },
  }),

  setProductSelected: productObject => ({
    type: Types.SET_PRODUCT_SELECTED,
    payload: { productObject },
  }),

  setError: message => ({
    type: Types.ERROR,
    payload: { message },
  }),
};
