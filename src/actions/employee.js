import firebase from 'firebase';
import { reset } from 'redux-form';
import { Actions } from 'react-native-router-flux';

export const FETCH_EMPLOYEE_LOADING = 'FETCH_EMPLOYEE_LOADING';
export const FETCH_EMPLOYEE_SUCCESS = 'FETCH_EMPLOYEE_SUCCESS';
export const FETCH_EMPLOYEE_ERROR = 'FETCH_EMPLOYEE_ERROR';

export const SAVE_EMPLOYEE_LOADING = 'SAVE_EMPLOYEE_LOADING';
export const SAVE_EMPLOYEE_SUCCESS = 'SAVE_EMPLOYEE_SUCCESS';
export const SAVE_EMPLOYEE_ERROR = 'SAVE_EMPLOYEE_ERROR';

export const loadEmployeeList = () => (dispatch) => {
  dispatch({
    type: FETCH_EMPLOYEE_LOADING,
  });

  dispatch(reset('employeeForm'));

  const { currentUser } = firebase.auth();
  const req = firebase.database().ref(`/users/${currentUser.uid}/employee`);

  req.on('value', (snapshot) => {
    const newData = { ...snapshot.val() };

    Object.keys(newData).forEach((uid) => {
      newData[uid].uid = uid;
    });

    dispatch({
      type: FETCH_EMPLOYEE_SUCCESS,
      payload: newData,
    });
  });
};

const addEmployee = (values, dispatch) => {
  const { currentUser } = firebase.auth();
  const req = firebase.database().ref(`/users/${currentUser.uid}/employee`);

  req.push({ ...values }).then(() => {
    dispatch({
      type: SAVE_EMPLOYEE_SUCCESS,
      payload: {
        success: true,
      },
    });

    Actions.pop('employeeList');
  }).catch(() => {
    dispatch({
      type: SAVE_EMPLOYEE_ERROR,
      payload: {
        error: true,
      },
    });
  });
};

const updateEmployee = (values, uid, dispatch) => {
  const { currentUser } = firebase.auth();
  const req = firebase.database().ref(`/users/${currentUser.uid}/employee/${uid}`);

  req.set({ ...values }).then(() => {
    dispatch({
      type: SAVE_EMPLOYEE_SUCCESS,
      payload: {
        success: true,
      },
    });

    Actions.pop('employeeList');
  }).catch(() => {
    dispatch({
      type: SAVE_EMPLOYEE_ERROR,
      payload: {
        error: true,
      },
    });
  });
};

export const deleteEmployee = uid => () => {
  const { currentUser } = firebase.auth();
  const req = firebase.database().ref(`/users/${currentUser.uid}/employee/${uid}`);

  req.remove().then(() => {
    Actions.pop('employeeList');
  });
};

export const employeeSave = (formType, values, uid) => (dispatch) => {
  dispatch({
    type: SAVE_EMPLOYEE_LOADING,
  });

  if (formType === 'add') {
    addEmployee(values, dispatch);
  } else if (formType === 'update') {
    updateEmployee(values, uid, dispatch);
  }
};
