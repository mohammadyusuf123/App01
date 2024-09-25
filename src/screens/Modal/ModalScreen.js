import {
  View,
  Text,
  Modal,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useAuth from '../../../Hooks/useAuth';
import CustomButton from '../../components/Button/CustomButton';
import {doc, setDoc} from 'firebase/firestore';
import {db, timestamp} from '../../../firebase';

const ModalScreen = ({navigation}) => {
  const {user} = useAuth();
  console.log(user.photoURL);
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const [job, setJob] = useState('');

  const incompleteForm = !image || !age || !job;
  const updateUserProfile = () => {
    setDoc(doc(db, 'users', user.uid), {
      id: user.uid,
      displayName: user.displayName,
      photoURL: image,
      job,
      age,
      timestamp,
    })
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(err => {
        Alert.alert('Error', err.message);
      });
  };

  return (
    <SafeAreaView>
      <Modal animationType="fade" presentationStyle="pageSheet">
        <TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={34} color="#FF5864" />
        </TouchableOpacity>
        <View className="flex-1 items-center pt-1">
          <Image
            className="h-20 w-full"
            resizeMode="contain"
            source={require('../../../assets/images/text-logo.png')}
          />
          <Text className="text-xl text-gray-500 p-2 font-bold">
            Welcome {user.displayName}
          </Text>

          <Text className="text-center p-4 font-bold text-red-400">
            Step 1: The Profile Pic
          </Text>

          <TextInput
            placeholder="Enter a profile pic url"
            className="text-center text-xl pb-2 border border-gray-400 rounded-md px-8 py-1"
            keyboardType="url"
            value={image}
            onChangeText={setImage}
          />
          <Text className="text-center p-4 font-bold text-red-400">
            Step 2: The Job
          </Text>

          <TextInput
            placeholder="Enter your occupation"
            className="text-center text-xl pb-2 border border-gray-400 rounded-md px-8 py-1"
            onChangeText={setJob}
            value={job}
          />
          <Text className="text-center p-4 font-bold text-red-400">
            Step 3: The Age
          </Text>

          <TextInput
            placeholder="Enter your age"
            className="text-center text-xl pb-2 border border-gray-400 rounded-md px-8 py-1"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
            maxLength={2}
          />

          <View className="mt-5">
            <CustomButton
              disabled={incompleteForm}
              title="Update Profile"
              onPress={updateUserProfile}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ModalScreen;
