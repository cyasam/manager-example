import { SAVE_EMPLOYEE_LOADING, SAVE_EMPLOYEE_SUCCESS } from '../actions';

const INITIAL_STATE = {
  loading: false,
  success: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_EMPLOYEE_LOADING:
      return { ...state, loading: true };
    case SAVE_EMPLOYEE_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    default:
      return state;
  }
};
