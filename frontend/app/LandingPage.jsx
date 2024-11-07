import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const LandingPage = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Header Section */}
      <View className="bg-blue-500 p-4">
        <Text className="text-white text-3xl font-bold text-center">Welcome to Our Landing Page</Text>
      </View>

      {/* Main Content Section */}
      <View className="flex-1 items-center justify-center p-6">
        <Image
          source={{ uri: 'https://via.placeholder.com/300' }} // Replace with your image URL
          className="w-3/4 h-48 rounded-lg mb-4"
          resizeMode="cover"
        />
        <Text className="text-gray-800 text-lg text-center mb-4">
          Discover amazing features and benefits that we offer to our users.
        </Text>
        
        {/* Buttons Section */}
        <View className="flex-row justify-around w-full mb-4">
          <TouchableOpacity
            className="bg-blue-500 rounded-full px-6 py-3"
            onPress={() => alert('Get Started Pressed!')}
          >
            <Text className="text-white text-lg font-semibold text-center">Get Started</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            className="bg-green-500 rounded-full px-6 py-3"
            onPress={() => alert('Learn More Pressed!')}
          >
            <Text className="text-white text-lg font-semibold text-center">Learn More</Text>
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