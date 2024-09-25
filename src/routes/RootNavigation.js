import React from 'react';

import Splash from '../screens/Splash/Splash';
import Welcome from '../screens/Welcome/Welcome';
import BottomTab from '../screens/BottomTab/BottomTab';
import Profile from '../screens/Profile/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import FirstName from '../screens/Welcome/FirstName';
import Chat from '../screens/Chat/Chat';
import Signup from '../screens/Login/Signup';
import Login from '../screens/Login/Login';
import useAuth from '../../Hooks/useAuth';
import ModalScreen from '../screens/Modal/ModalScreen';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const {user} = useAuth();
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="firstName" component={FirstName} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Modal" component={ModalScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
