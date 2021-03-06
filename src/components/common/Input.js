import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#000',
  },
  input: {
    height: 36,
    fontSize: 16,
    padding: 0,
    margin: 0,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    color: '#000',
  },
});

const Input = (props) => {
  const {
    input: {
      onBlur,
      onFocus,
      onChange,
      value,
    },
    label,
    ...inputProps
  } = props;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...inputProps}
        style={styles.input}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        onChangeText={onChange}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

Input.defaultProps = {
  value: '',
  secureTextEntry: false,
  placeholder: null,
  keyboardType: null,
  autoCapitalize: null,
  onChangeText() { },
};

Input.propTypes = {
  input: PropTypes.object.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
};

export default Input;
