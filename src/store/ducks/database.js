import Immutable from 'seamless-immutable';

export const Types = {
  GET: 'database/GET',
  GET_PRODUCT: 'database/GET_PRODUCT',
  GET_CATEGORIES: 'database/GET_CATEGORIES',
  SET: 'database/SET',
  SET_PRODUCT_SELECTED: 'database/SET_PRODUCT_SELECTED',
  ERROR: 'database/ERROR',

  GET_SUPPLY: 'database/GET_SUPPLY',
  SET_SUPPLY: 'database/SET_SUPPLY',

  NEW_CAR_REQUEST: 'database/NEW_CAR_REQUEST',
  NEW_CAR_SUCCESS: 'database/NEW_CAR_SUCCESS',

  SET_SNACKBAR: 'snackbar',

  CREATE_ABA_REQUEST: 'database/CREATE_ABA_REQUEST',
  CREATE_ABA_SUCCESS: 'database/CREATE_ABA_SUCCESS',

  GET_CAR_REQUEST: 'database/GET_CAR_REQUEST',
  GET_CAR_SUCCESS: 'database/GET_CAR_SUCCESS',
};

const INITAL_STATE = Immutable({
  data: [],
  abastecimentos: [],
  productSelected: null,
  loading: false,
  error: false,
  carAdded: false,
});

export default function database(state = INITAL_STATE, action) {
  switch (action.type) {
    case Types.GET:
      return { ...state, loading: true };

    case Types.GET_SUPPLY:
      return { ...state, loading: true };

    case Types.SET_SNACKBAR:
      return { ...state, carAdded: !state.carAdded };

    case Types.SET:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false,
      };

    case Types.SET_SUPPLY:
      return {
        ...state,
        abastecimentos: action.payload.data,
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

    case Types.NEW_CAR_REQUEST:
      return { ...state, loading: true, error: false, errorMessage: null };

    case Types.NEW_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        carAdded: true,
      };

    case Types.CREATE_ABA_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case Types.CREATE_ABA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        carAdded: true,
      };

    case Types.GET_CAR_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case Types.GET_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
}

export const Actions = {
  getDatabase: id => ({
    type: Types.GET,
    payload: { id },
  }),

  getSupply: id => ({
    type: Types.GET_SUPPLY,
    payload: { id },
  }),

  setSupply: data => ({
    type: Types.SET_SUPPLY,
    payload: { data },
  }),

  getCategories: id => ({
    type: Types.GET_CATEGORIES,
    payload: { id },
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

  newCarRequest: data => ({
    type: Types.NEW_CAR_REQUEST,
    payload: { data },
  }),

  newCarSuccess: data => ({
    type: Types.NEW_CAR_SUCCESS,
    payload: { data },
  }),

  setSnackbar: () => ({
    type: Types.SET_SNACKBAR,
  }),

  createAbastecimentoRequest: data => ({
    type: Types.CREATE_ABA_REQUEST,
    payload: { data },
  }),

  createAbastecimentoSuccess: () => ({
    type: Types.CREATE_ABA_SUCCESS,
  }),

  getCarRequest: data => ({
    type: Types.GET_CAR_REQUEST,
    payload: { data },
  }),

  getCarSuccess: data => ({
    type: Types.GET_CAR_SUCCESS,
    payload: { data },
  }),
};
