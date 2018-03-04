import React from 'react';
import PropTypes from 'prop-types';
import EmployeeForm from './EmployeeForm';

const AddEmployee = ({ employee }) => (
  <EmployeeForm employee={employee} />
);

AddEmployee.defaultProps = {
  employee: {},
};

AddEmployee.propTypes = {
  employee: PropTypes.object,
};


export default AddEmployee;
