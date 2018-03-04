import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
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
};

const Button = (props) => {
  const { children, onPress, disabled } = props;

  if (disabled) {
    return (
      <View
        style={{ ...styles.button, opacity: 0.7 }}
      >
        <Text style={styles.buttonText}>{ children }</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={{ ...styles.button }}
      activeOpacity={0.8}
      onPress={() => onPress()}
    >
      <Text style={styles.buttonText}>{ children }</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
