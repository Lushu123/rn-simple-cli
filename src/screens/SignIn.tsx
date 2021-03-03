import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import AuthContext from '../contexts/AuthContext';
import { RootStackParamList } from '../navigation/type';

const SignIn = () => {
  const navigation = useNavigation<
    StackNavigationProp<RootStackParamList, 'SignIn'>
  >();
  const { signOut, dispatch } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {}, []);
  return (
    <View>
      <Text>SignIn</Text>
      <Button
        title="登录"
        onPress={() => {
          setLoading(true);
          setTimeout(() => {
            dispatch({ type: 'SIGN_IN', token: { userName: 'admin' } });
            setLoading(false);
            navigation.goBack();
          }, 1000);
        }}
      />
      <Button title="登出" onPress={signOut} />
      {loading && <ActivityIndicator animating={loading} color="red" />}
    </View>
  );
};

export default SignIn;
