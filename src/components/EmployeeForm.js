import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { employeeSave } from '../actions';
import Input from './common/Input';
import Button from './common/Button';
import DayPicker from './common/DayPicker';
import Loading from './common/Loading';

const styles = {
  loading: {
    marginBottom: 10,
  },
  errorText: {
    marginBottom: 15,
    color: '#f00',
  },
};

class EmployeeForm extends Component {
  renderButton() {
    const { employee, handleSubmit } = this.props;

    if (Object.keys(employee).length) {
      return (
        <Button
          onPress={handleSubmit(values => this.props.employeeSave('update', values, employee.uid))}
        >
          Update
        </Button>
      );
    }

    return (
      <Button
        onPress={handleSubmit(values => this.props.employeeSave('add', values))}
      >
        Add
      </Button>
    );
  }

  render() {
    const { loading, submitError } = this.props;
    return (
      <View style={{ flex: 1, padding: 15 }}>
        { submitError && <Text style={styles.errorText}>Employee not saved.</Text> }
        <Field
          name="name"
          label="Name"
          component={Input}
        />
        <Field
          name="phone"
          label="Phone"
          component={Input}
          keyboardType="phone-pad"
          secureTextEntry
        />
        <Field
          name="shift"
          label="Shift"
          component={DayPicker}
          keyboardType="phone-pad"
          secureTextEntry
        />

        <Loading loading={loading} style={styles.loading} />

        { this.renderButton() }
      </View>
    );
  }
}

EmployeeForm.propTypes = {
  employee: PropTypes.object.isRequired,
  submitError: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  employeeSave: PropTypes.func.isRequired,
};

const EmployeeFormWithReduxForm = reduxForm({ form: 'employeeForm' })(EmployeeForm);

const mapStateToProps = (state, { employee }) => ({
  success: state.employeeForm.success,
  loading: state.employeeForm.loading,
  submitError: state.employeeForm.error,
  initialValues: {
    name: employee.name || '',
    phone: employee.phone || '',
    shift: employee.shift || 'monday',
  },
});

export default connect(mapStateToProps, { employeeSave })(EmployeeFormWithReduxForm);
