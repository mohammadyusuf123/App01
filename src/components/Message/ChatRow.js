import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

import getMatchedUserInfo from '../../../libs/getMatchedUserInfo';
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import useAuth from '../../../Hooks/useAuth';
import {db} from '../../../firebase';

const ChatRow = ({matchDetails, navigation}) => {
  const {user} = useAuth();
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);
  const [lastMessage, setLastMessage] = useState('');

  useEffect(() => {
    setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid));
  }, [matchDetails, user]);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, 'matches', matchDetails.id, 'messages'),
        orderBy('timestamp', 'desc'),
        limit(1),
      ),
      snapShot => setLastMessage(snapShot.docs[0]?.data()?.message),
    );
  }, [matchDetails]);

  return (
    <TouchableOpacity
      className="flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg shadow-lg"
      onPress={() => navigation.navigate('Message', {matchDetails})}>
      <Image
        className="rounded-full h-16 w-16 mr-4"
        source={{uri: matchedUserInfo?.photoURL}}
      />
      <View>
        <Text className="text-lg font-semibold">
          {matchedUserInfo?.displayName}
        </Text>
        <Text>{lastMessage || 'Say Hi'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRow;
