import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  // Hide the header when this component is mounted
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View >
      <Text >Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});