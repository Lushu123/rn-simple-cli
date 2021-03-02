import React from 'react';
import { StyleSheet } from 'react-native';
import Auth from './src/contexts/AuthContext';
import RootNavigator from './src/navigation';

export default function App() {
  return (
    <Auth>
      <RootNavigator />
    </Auth>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
