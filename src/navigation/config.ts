import { Route } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import BottomTabNavigator from './bottomTab';
import { RootStackParamList } from './type';

export const rootNavigator: Array<{
  name: keyof RootStackParamList;
  component: any;
  options:
    | StackNavigationOptions
    | ((props: {
        route: Route<keyof RootStackParamList, undefined>;
        navigation: any;
      }) => StackNavigationOptions)
    | undefined;
}> = [
  {
    name: 'TabRoot',
    component: BottomTabNavigator,
    options: ({ navigation, route }) => ({}),
  },
];
