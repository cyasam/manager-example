import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#000',
  },
  input: {
    height: 40,
    fontSize: 16,
    padding: 0,
    margin: 0,
    marginBottom: 10,
    borderWidth: 0,
    color: '#000',
  },
});

const Input = (props) => {
  const {
    value, placeholder, label, onChangeText, secureTextEntry, keyboardType, autoCapitalize,
  } = props;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
};

Input.defaultProps = {
  secureTextEntry: false,
  placeholder: null,
  keyboardType: null,
  autoCapitalize: null,
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
};

export default Input;
