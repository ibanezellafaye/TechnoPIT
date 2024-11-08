import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Logo from "../assets/images/Logo.png"; 

const LandingPage = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Main Content Section */}
      <View className="flex-1 items-center justify-center p-6 m-32">
        <Image 
        source={Logo} 
        style={{ width: 300, height: 75 }} 
        resizeMode="cover"
      />
        <Text className=" text-center mb-4 text-2xl font-bold">
          Stay Dry, Stay Safe.
        </Text>
        
        {/* Buttons Section */}
        <View className="flex-column justify-around w-30 mb-4 m-36">
          <TouchableOpacity
            className="bg-blue-500 rounded-full px-6 py-3 mb-10"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-white text-lg font-semibold text-center">Login</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            className="bg-green-500 rounded-full px-6 py-3"
            onPress={() => navigation.navigate("Registration")}
          >
            <Text className="text-white text-lg font-semibold text-center">Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer Section */}
      {/* <View className="bg-gray-800 p-4">
        <Text className="text-white text-center">© 2023 Your Company. All rights reserved.</Text>
      </View> */}
    </ScrollView>
  );
};

export default LandingPage;
