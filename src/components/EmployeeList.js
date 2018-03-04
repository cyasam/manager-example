import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadEmployeeList } from '../actions/employee';
import Loading from './common/Loading';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.loadEmployeeList();
  }

  renderList() {
    const { employees, loading } = this.props;
    if (loading) {
      return <Loading loading={loading} />;
    } else if (!Object.keys(employees).length && !loading) {
      return <Text>No employees found.</Text>;
    }

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const dataSource = ds.cloneWithRows(employees);

    return (
      <ListView
        dataSource={dataSource}
        renderRow={rowData => <EmployeeListItem data={rowData} />}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 15 }}>
        { this.renderList() }
      </View>
    );
  }
}

const mapStatetoProps = (state) => {
  const { loading, employees } = state.employeeList;
  return {
    loading,
    employees,
  };
};

EmployeeList.propTypes = {
  loading: PropTypes.bool.isRequired,
  employees: PropTypes.object.isRequired,
  loadEmployeeList: PropTypes.func.isRequired,
};

export default connect(mapStatetoProps, { loadEmployeeList })(EmployeeList);
