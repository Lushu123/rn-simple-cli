import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, Dispatch, FC, useReducer } from "react";
//context
export const AuthContext = createContext<{
  signOut: () => void;
  dispatch: Dispatch<any>;
  auth: { initLoading: boolean; isSignIn: boolean; userToken: null | { userName: string } } | null;
}>({
  signOut: () => {},
  dispatch: () => null,
  auth: null,
});

//reducer 纯函数
const reducer = (prevState, action) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        initLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignIn: true,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignIn: false,
        userToken: null,
      };
  }
};

//Provider 组件
const AuthProvider: FC = (props) => {
  const [auth, dispatch] = useReducer(reducer, {
    initLoading: true,
    isSignIn: false,
    userToken: null,
  });
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
        console.log(userToken);
      } catch (e) {}
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      dispatch,
      auth,
    }),
    [auth]
  );
  return <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
