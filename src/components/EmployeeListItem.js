import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import capitalize from 'capitalize';

const styles = {
  box: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
  },
  texts: {
    fontSize: 18,
    color: '#000',
  },
};

const EmployeeListItem = ({ data, data: { name, phone, shift } }) => (
  <TouchableWithoutFeedback
    onPress={() => Actions.editEmployee({ employee: data })}
  >
    <View style={styles.box}>
      <Text style={styles.texts}>{ name }</Text>
      <Text style={styles.texts}>{ phone }</Text>
      <Text style={styles.texts}>{ capitalize(shift) }</Text>
    </View>
  </TouchableWithoutFeedback>
);

EmployeeListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EmployeeListItem;
