import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import useAuth from '../../../Hooks/useAuth';

const Splash = ({navigation}) => {
  const {user} = useAuth();

  useEffect(() => {
    if (user === null) {
      navigation.navigate('Login');
    }
    if (user) {
      navigation.navigate('Home');
    }
    if (!user) {
      navigation.navigate('Welcome');
    }
  }, [user]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={{
          uri: 'https://static-00.iconduck.com/assets.00/tinder-icon-2048x2048-a2rg1pxw.png',
        }}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F44259',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: responsiveWidth(50),
    height: responsiveHeight(50),
    resizeMode: 'contain',
  },
});
