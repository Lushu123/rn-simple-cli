import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, FC, useReducer } from 'react';
//context
export const AuthContext = createContext({});

//reducer 纯函数
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignOut: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignOut: true,
        userToken: null,
      };
  }
};

//Provider 组件
const Auth: FC = (props) => {
  const [auth, dispatch] = useReducer(reducer, {
    isLoading: true,
    isSignOut: false,
    userToken: null,
  });
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {}
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async () => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async () => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      isSignIn() {
        return !auth.isSignOut && !!auth.userToken;
      },
    }),
    [auth]
  );
  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default Auth;
