export const Types = {
  GET: 'cart/GET',
  ADD_TO_CART: 'cart/ADD_TO_CART',
  REMOVE: 'cart/REMOVE',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET:
      return { ...state, loading: true };

    case Types.ADD_TO_CART:
      return {
        loading: false,
        error: false,
        data: [
          ...state.data,
          ...action.payload.product,
        ],
      };

    case Types.REMOVE:
      return {
        ...state,
        data: state.data.filter(product => product.id !== action.payload.productID),
      };

    default:
      return state;
  }
}

export const Actions = {
  getCart: () => ({
    type: Types.GET,
  }),

  addToCart: product => ({
    type: Types.ADD_TO_CART,
    payload: { product },
  }),

  removeFromCart: productID => ({
    type: Types.REMOVE,
    payload: { productID },
  }),
};
