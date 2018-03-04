import { SAVE_EMPLOYEE_LOADING, SAVE_EMPLOYEE_SUCCESS, SAVE_EMPLOYEE_ERROR } from '../actions';

const INITIAL_STATE = {
  loading: false,
  success: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_EMPLOYEE_LOADING:
      return { ...state, loading: true };
    case SAVE_EMPLOYEE_ERROR:
      return { ...state, loading: false, ...action.payload };
    case SAVE_EMPLOYEE_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    default:
      return state;
  }
};
