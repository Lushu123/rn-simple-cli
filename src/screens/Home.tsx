import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import AuthContext from '../contexts/AuthContext';

const Home = () => {
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    console.log(auth);
  }, []);
  return (
    <View>
      <Text>Home</Text>

      {auth?.isSignIn ? (
        <Text>{auth?.userToken?.userName}</Text>
      ) : (
        <Text>未登录</Text>
      )}
    </View>
  );
};

export default Home;
