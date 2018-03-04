import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Input from './common/Input';
import Button from './common/Button';
import Loading from './common/Loading';
import { onPressLoginButton } from '../actions';

const styles = StyleSheet.create({
  error: {
    alignItems: 'center',
    marginBottom: 10,
  },
  errorText: {
    color: '#f00',
    fontSize: 18,
  },
});

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = true;
  } if (!values.password) {
    errors.password = true;
  }

  return errors;
};

class LoginForm extends Component {
  renderError() {
    if (this.props.authError) {
      return (
        <View style={styles.error}>
          <Text style={styles.errorText}>{ this.props.authError }</Text>
        </View>
      );
    }

    return null;
  }

  render() {
    const {
      handleSubmit,
      loading,
      submitting,
      invalid,
    } = this.props;

    return (
      <View style={{ flex: 1, padding: 15 }}>
        <Field
          name="email"
          label="Email"
          component={Input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Field
          name="password"
          label="Password"
          component={Input}
          autoCapitalize="none"
          secureTextEntry
        />
        { this.renderError() }
        <Loading loading={loading} style={{ marginBottom: 10 }} />
        <Button
          disabled={invalid || submitting}
          onPress={handleSubmit(values => this.props.onPressLoginButton(values))}
        >
          Login
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  authError: state.auth.error,
});

LoginForm.defaultProps = {
  authError: '',
};

LoginForm.propTypes = {
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  authError: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  onPressLoginButton: PropTypes.func.isRequired,
};

const LoginFormWithReduxForm = reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm);

export default connect(mapStateToProps, {
  onPressLoginButton,
})(LoginFormWithReduxForm);
