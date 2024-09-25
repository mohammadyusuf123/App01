import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, callEnabled}) => {
  const navigation = useNavigation();
  return (
    <View className="p-2 flex-row items-center justify-between">
      <View className="flex flex-row items-center">
        <TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={34} color="#FF5864" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold pl-2">{title}</Text>
      </View>
      {callEnabled && (
        <TouchableOpacity className="rounded-full mr-4 p-3 bg-red-200">
          <Foundation name="telephone" size={20} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
