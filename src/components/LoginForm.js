import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './common/Input';
import Button from './common/Button';
import { changeEmailText, changePasswordText, onPressLoginButton } from '../actions';

const styles = StyleSheet.create({
  loading: {
    marginBottom: 10,
  },
  error: {
    alignItems: 'center',
    marginBottom: 10,
  },
  errorText: {
    color: '#f00',
    fontSize: 18,
  },
});

class LoginForm extends Component {
  onPressLoginButton() {
    const { email, password } = this.props;

    this.props.onPressLoginButton(email, password);
  }

  changeEmailText(text) {
    this.props.changeEmailText(text);
  }

  changePasswordText(text) {
    this.props.changePasswordText(text);
  }

  renderLoading() {
    return this.props.loading ? <ActivityIndicator style={styles.loading} /> : null;
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={styles.error}>
          <Text style={styles.errorText}>{ this.props.error }</Text>
        </View>
      );
    }

    return null;
  }

  render() {
    return (
      <View>
        <Input
          label="Email"
          value={this.props.email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => this.changeEmailText(text)}
        />
        <Input
          label="Password"
          value={this.props.password}
          autoCapitalize="none"
          secureTextEntry
          onChangeText={text => this.changePasswordText(text)}
        />
        { this.renderError() }
        { this.renderLoading() }
        <Button
          onPress={() => this.onPressLoginButton()}
        >
          Login
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
});

LoginForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  changeEmailText: PropTypes.func.isRequired,
  changePasswordText: PropTypes.func.isRequired,
  onPressLoginButton: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  changeEmailText,
  changePasswordText,
  onPressLoginButton,
})(LoginForm);
