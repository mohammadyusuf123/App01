/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import useAuth from '../../../Hooks/useAuth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-deck-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../../../firebase';

const Home = ({navigation}) => {
  const {logout, user} = useAuth();
  const [users, setUsers] = useState([]);
  const swiperRef = useRef();
  const fetchUser = async () => {
    try {
      const {data} = await axios.get(
        'https://randomuser.me/api/?gender=female&results=50',
      );
      setUsers(data.results);
    } catch (error) {
      Alert.alert('Error getting user', '', [
        {text: 'Retry', onPress: () => fetchUser()},
      ]);
    }
  };
  useLayoutEffect(() => {
    getDoc(doc(db, 'users', user.uid)).then(snapShot => {
      if (!snapShot.exists()) {
        navigation.navigate('Modal');
      }
    });
  }, []);
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <SafeAreaView className="flex-1 p-5">
      <View className="flex-row items-center justify-between px-5">
        <TouchableOpacity onPress={logout}>
          <Image
            className="h-10 w-10 rounded-full"
            source={{
              uri: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
          <Image
            className="h-14 w-14"
            source={require('../../../assets/images/logo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <AntDesign name="message1" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>
      <View className="flex-1 -mt-6">
        <Swiper
          ref={swiperRef}
          containerStyle={{
            backgroundColor: 'transparent',
          }}
          cards={users}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={cardIndex => {
            console.log('Swipe Pass');
          }}
          onSwipedRight={cardIndex => {
            console.log('Swipe Match');
          }}
          backgroundColor="#4FD0E9"
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  textAlign: 'right',
                  color: 'red',
                },
              },
            },
            right: {
              title: 'MATCH',
              style: {
                label: {
                  color: '#4DED30',
                },
              },
            },
          }}
          renderCard={card => {
            return card ? (
              <View
                key={card.id}
                className="bg-white h-3/4 rounded-xl relative">
                <Image
                  className="absolute top-0 h-full w-full rounded-xl"
                  source={{uri: card.picture.large}}
                />

                <View className="absolute bottom-0 bg-white w-full h-20 justify-between items-center flex-row px-6 py-2 rounded-b-xl shadow-xl">
                  <View>
                    <Text className="text-xl font-bold">{card.name.last}</Text>
                    <Text>{card.phone}</Text>
                  </View>
                  <Text className="text-2xl font-bold">{card.dob.age}</Text>
                </View>
              </View>
            ) : (
              <View className="relative bg-white h-3/4 rounded-xl justify-center items-center shadow-xl">
                <Text className="font-bold pb-5">No more profiles</Text>
                <Image
                  className="h-20 w-20"
                  height={100}
                  width={100}
                  source={{
                    uri: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Crying_Face_Emoji_large.png?v=1571606037',
                  }}
                />
              </View>
            );
          }}
        />
      </View>
      <View className="flex-row justify-evenly items-center">
        <TouchableOpacity
          className="bg-red-200 rounded-full h-16 w-16 justify-center items-center"
          onPress={() => swiperRef.current.swipeLeft()}>
          <Entypo name="cross" size={30} color="#F44259" />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-green-200 rounded-full h-16 w-16 justify-center items-center"
          onPress={() => swiperRef.current.swipeRight()}>
          <AntDesign name="heart" size={20} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
