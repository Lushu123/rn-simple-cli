import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/type";

const My = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "TabRoot">>();

  return (
    <View>
      <Text>My</Text>
      <Button title='登录' onPress={() => navigation.navigate("SignIn")} />
    </View>
  );
};

export default My;
