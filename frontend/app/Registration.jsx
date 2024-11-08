import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Registration = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);

  return (
    <View>
      <Text>Registration</Text>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({})