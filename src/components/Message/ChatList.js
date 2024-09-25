import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {collection, onSnapshot, query, where} from 'firebase/firestore';
import useAuth from '../../../Hooks/useAuth';
import ChatRow from './ChatRow';
import {db} from '../../../firebase';

const ChatList = () => {
  const [matches, setMatches] = useState([]);

  const {user} = useAuth();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, 'matches'),
        where('usersMatched', 'array-contains', user.uid),
      ),
      snapShot =>
        setMatches(
          snapShot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          })),
        ),
    );

    return unsubscribe;
  }, [user]);

  console.log(matches);

  return matches.length > 0 ? (
    <FlatList
      className="h-full"
      data={matches}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ChatRow matchDetails={item} />}
    />
  ) : (
    <View className="p-5">
      <Text className="text-center text-lg">No matches at the moment</Text>
    </View>
  );
};

export default ChatList;
