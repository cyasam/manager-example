import React from 'react';
import PropTypes from 'prop-types';
import EmployeeForm from './EmployeeForm';

const EditEmployee = ({ employee }) => (
  <EmployeeForm employee={employee} />
);


EditEmployee.propTypes = {
  employee: PropTypes.object.isRequired,
};


export default EditEmployee;
