import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import CustomButton from '../../components/Button/CustomButton';

const FirstName = ({navigation}) => {
  return (
    <View style={{flex: 1, padding: 20, gap: 10, backgroundColor: 'white'}}>
      <AntDesign
        style={{marginTop: 40}}
        name="close"
        size={35}
        color="black"
        onPress={() => navigation.goBack()}
      />

      <Text style={styles.title}>My first name is</Text>

      <TextInput style={styles.input} placeholder="Enter your name" />

      <View style={{gap: 3}}>
        <Text className="text-red-500">
          This is how it will appears in Tinder
        </Text>
        <Text className="text-gray-400 text-md font-bold mt-2">
          Open up App.js to start working on your app!
        </Text>
        <CustomButton title="Continue" />
      </View>
    </View>
  );
};

export default FirstName;

const styles = StyleSheet.create({
  title: {
    fontSize: responsiveFontSize(2.8),
    color: 'black',
    fontWeight: 'bold',
    marginTop: 30,
  },
  input: {
    padding: 10,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#F0F2F4',
  },
  subTitle: {
    fontSize: responsiveFontSize(1.7),
    color: 'black',
    opacity: 0.7,
  },
});
