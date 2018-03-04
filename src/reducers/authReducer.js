import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions';

const INITIAL_STATE = {
  loading: false,
  user: null,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: '',
        user: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: null,
      };
    default:
      return state;
  }
};
