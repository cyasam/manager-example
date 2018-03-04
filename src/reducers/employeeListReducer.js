import { FETCH_EMPLOYEE_LOADING, FETCH_EMPLOYEE_SUCCESS } from '../actions';

const INITIAL_STATE = {
  loading: false,
  success: false,
  employees: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE_LOADING:
      return { ...state, loading: true };
    case FETCH_EMPLOYEE_SUCCESS:
      return { ...state, loading: false, employees: { ...action.payload } };
    default:
      return state;
  }
};
