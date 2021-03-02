import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import type { Route } from '@react-navigation/routers';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import Home from '../screens/Home';
import My from '../screens/My';
import { BottomTabParamList, RootStackParamList } from './type';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'TabRoot'>) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: getHeaderTitle(route),
    });
  }, [navigation, route]);

  function getHeaderTitle(route: Partial<Route<string>>) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'TabHome';
    switch (routeName) {
      case 'TabHome':
        return '首页';
      case 'TabMe':
        return '我的';
    }
  }

  return (
    <BottomTab.Navigator
      initialRouteName="TabHome"
      tabBarOptions={{ activeTintColor: '#3292EE' }}
    >
      <BottomTab.Screen
        name="TabHome"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home" size={30} color={color} />
          ),
          tabBarLabel: '首页',
        }}
      />
      <BottomTab.Screen
        name="TabMe"
        component={My}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person" size={30} color={color} />
          ),
          tabBarLabel: '我的',
        }}
      />
    </BottomTab.Navigator>
  );
}
