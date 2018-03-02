import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import config from '../config';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    backgroundColor: config.headerBgColor,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
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
