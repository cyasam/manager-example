import React from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import config from './config';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeAdd from './components/EmployeeAdd';

const RouterContainer = () => (
  <Router>
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
          component={EmployeeAdd}
          title="Add Employee"
        />
      </Scene>
    </Stack>
  </Router>
);

export default RouterContainer;
