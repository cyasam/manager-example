import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { destroy } from 'redux-form';

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const onPressLoginButton = ({ email, password }) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });

  const authPromise = firebase.auth().signInWithEmailAndPassword(email, password);

  authPromise.then((user) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });

    dispatch(destroy('loginForm'));

    Actions.main();
  }).catch(() => {
    dispatch({
      type: LOGIN_ERROR,
      payload: 'Authentication Failed.',
    });
  });
};
