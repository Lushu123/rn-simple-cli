import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { rootNavigator } from './config';
import { RootStackParamList } from './type';
const RootStack = createStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {rootNavigator.map((screen, idx) => (
          <RootStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
