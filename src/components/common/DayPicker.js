import React from 'react';
import { StyleSheet, View, Picker, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#000',
  },
});

const DayPicker = (props) => {
  const {
    input: {
      value,
      onChange,
    },
    label,
    ...inputProps
  } = props;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Picker
        {...inputProps}
        selectedValue={value}
        onValueChange={onChange}
      >
        <Picker.Item label="Monday" value="monday" />
        <Picker.Item label="Tuesday" value="tuesday" />
        <Picker.Item label="Wednesday" value="wednesday" />
        <Picker.Item label="Thursday" value="thursday" />
        <Picker.Item label="Friday" value="friday" />
        <Picker.Item label="Saturday" value="saturday" />
      </Picker>
    </View>
  );
};

DayPicker.defaultProps = {
  value: '',
  secureTextEntry: false,
  placeholder: null,
  keyboardType: null,
  autoCapitalize: null,
  onChangeText() { },
};

DayPicker.propTypes = {
  input: PropTypes.object.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
};

export default DayPicker;
