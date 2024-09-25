import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import HouseRules from '../../components/Welcome/HouseRules';
import CustomButton from '../../components/Button/CustomButton';

const Welcome = ({navigation}) => {
  return (
    <ImageBackground
      className="flex-1"
      resizeMode="cover"
      source={require('../../../assets/images/bg.png')}
      r>
      <View style={styles.container}>
        {/* ///First Container */}
        <View style={styles.firstContainer}>
          <Text style={styles.title}>Welcome to Tinder</Text>
          <Text style={styles.subTitle}>Please follow the house rules</Text>
        </View>

        {/* ///Second Container */}

        <View style={{gap: 15}}>
          <HouseRules
            title="Be yourself"
            subTitle="Make sure your photos,age and bio are true to who you are"
          />
          <HouseRules
            title="Stay safe"
            subTitle="Make sure your photos,age and bio are true to who you are"
          />
          <HouseRules
            title="Play it cool"
            subTitle="Make sure your photos,age and bio are true to who you are"
          />
          <HouseRules
            title="Be proactive"
            subTitle="Make sure your photos,age and bio are true to who you are"
          />
        </View>
        {/* ///Third Container */}
        <View className="w-[90%]">
          <CustomButton
            title="I Agree"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  firstContainer: {
    alignItems: 'center',
    gap: 5,
    marginTop: responsiveHeight(5),
  },
  title: {
    fontSize: responsiveFontSize(3),
    color: 'white',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: responsiveFontSize(1.7),
    color: 'black',
  },
});
