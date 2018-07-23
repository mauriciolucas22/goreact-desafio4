export const Types = {
  GET: 'database/GET',
  SET: 'database/SET',
  ERROR: 'database/ERROR',
};

const INITAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

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

  setError: message => ({
    type: Types.ERROR,
    payload: { message },
  }),
};
