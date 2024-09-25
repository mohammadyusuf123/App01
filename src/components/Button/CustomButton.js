import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../utils/Colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const CustomButton = ({title, onPress, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: responsiveFontSize(2),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
