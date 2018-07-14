const Types = {
  GET: 'cart/GET',
  ADD_TO_CART: 'cart/ADD_TO_CART',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
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
};
