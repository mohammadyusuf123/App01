import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Input = ({
  label,
  placeholder,
  value,
  textValue,
  secureText,
  Capitalize,
}) => {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>

      <TextInput
        className="p-4 border border-gray-400 rounded-lg mt-1 bg-gray-100"
        placeholder={placeholder}
        value={value}
        onChangeText={textValue}
        clearButtonMode="while-editing"
        placeholderTextColor="#6b7280"
        secureTextEntry={secureText}
        autoCapitalize={Capitalize}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  title: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    fontWeight: 'bold',
  },
});
