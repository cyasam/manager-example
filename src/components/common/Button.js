import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#f00',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

const Button = (props) => {
  const { children, onPress } = props;
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={() => onPress()}
    >
      <Text style={styles.buttonText}>{ children }</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
