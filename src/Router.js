import React from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import config from './config';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

const RouterContainer = () => (
  <Router sceneStyle={{ backgroundColor: '#fff' }}>
    <Stack
      key="root"
      hideNavBar
      navigationBarStyle={{ backgroundColor: config.headerBgColor }}
      backButtonTintColor="#fff"
      titleStyle={{ color: '#fff' }}
      rightButtonIconStyle={{ color: '#fff' }}
      rightButtonTextStyle={{ color: '#fff' }}
      leftButtonTextStyle={{ color: '#fff' }}
    >
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" />
      </Scene>
      <Scene key="main">
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          rightTitle="Add"
          onRight={() => Actions.addEmployee()}
        />
        <Scene
          key="addEmployee"
          component={AddEmployee}
          title="Add Employee"
        />
        <Scene
          key="editEmployee"
          component={EditEmployee}
          title="Edit Employee"
        />
      </Scene>
    </Stack>
  </Router>
);

export default RouterContainer;
