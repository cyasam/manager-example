import React from 'react';
import { View } from 'react-native';
import Input from './common/Input';
import Button from './common/Button';

const EmployeeAdd = () => (
  <View style={{ flex: 1, padding: 15 }}>
    <Input
      label="Name"
    />
    <Input
      label="Phone"
      keyboardType="phone-pad"
      secureTextEntry
      onChangeText={text => this.changePasswordText(text)}
    />
    <Button
      onPress={() => console.log('add')}
    >
      Add
    </Button>
  </View>
);

export default EmployeeAdd;
