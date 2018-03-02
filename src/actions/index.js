import firebase from 'firebase';

export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const changeEmailText = text => ({
  type: CHANGE_EMAIL,
  payload: text,
});

export const changePasswordText = text => ({
  type: CHANGE_PASSWORD,
  payload: text,
});

export const onPressLoginButton = (email, password) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });

  const authPromise = firebase.auth().signInWithEmailAndPassword(email, password);

  authPromise.then((user) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  }).catch(() => {
    dispatch({
      type: LOGIN_ERROR,
      payload: 'Authentication Failed.',
    });
  });
};
