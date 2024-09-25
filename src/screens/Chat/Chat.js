import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Message/Header';
import ChatList from '../../components/Message/ChatList';
const Chat = ({navigation}) => {
  return (
    <SafeAreaView className="pt-5">
      <Header title="Chat" />
      <ChatList />
    </SafeAreaView>
  );
};

export default Chat;
