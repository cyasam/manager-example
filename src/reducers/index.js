import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import employeeFormReducer from './employeeFormReducer';
import employeeListReducer from './employeeListReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  employeeForm: employeeFormReducer,
  employeeList: employeeListReducer,
});
