import Immutable from 'seamless-immutable';

export const Types = {
  GET: 'database/GET',
  SAVE: 'database/SAVE',
  ERROR: 'database/ERROR',
};

const INITAL_STATE = Immutable({
  data: [],
  error: false,
});

export default function database(state = INITAL_STATE, action) {
  switch (action.type) {
    case Types.SAVE:
      return { ...state, data: action.payload.data, error: false };

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
