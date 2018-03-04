import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

const Loading = props => (props.loading ? <ActivityIndicator style={{ ...props.style }} /> : null);

Loading.defaultProps = {
  style: {},
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  style: PropTypes.object,
};

export default Loading;
