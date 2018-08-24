export const Types = {
  GET: 'cart/GET',
  ADD_TO_CART: 'cart/ADD_TO_CART',
  REMOVE: 'cart/REMOVE',
  CHANGE_AMOUNT: 'cart/CHANGE_AMOUNT',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

function getIndex(state, id) {
  const itemIndex = state.data.findIndex(product => product.id === id);

  return itemIndex;
}

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET:
      return { ...state, loading: true };

    case Types.ADD_TO_CART:
      const { product } = action.payload;
      const exists = getIndex(state, product.id);

      if (exists === -1) {
        return {
          loading: false,
          error: false,
          data: [
            ...state.data,
            { ...product, amount: 1, subTotal: product.price },
          ],
        };
      }

    case Types.REMOVE:
      return {
        ...state,
        data: state.data.filter(product => product.id !== action.payload.productID),
      };

    case Types.CHANGE_AMOUNT:
      const { newAmount, productId } = action.payload.changes;

      const itemIndex = getIndex(state, productId);
      state.data[itemIndex].amount = action.payload.changes.newAmount;

      const newSubTotal = (newAmount * state.data[itemIndex].price).toFixed(2);
      state.data[itemIndex].subTotal = newSubTotal;

      return {
        ...state,
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

  // data: { productID, newAmount }
  changeAmount: changes => ({
    type: Types.CHANGE_AMOUNT,
    payload: { changes },
  }),
};
