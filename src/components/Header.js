import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#f00',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
});

const Header = ({ text }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{ text }</Text>
  </View>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
