import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/CustomButton';

import Loading from '../../components/Loading/Loading';
import {auth} from '../../../firebase';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import useAuth from '../../../Hooks/useAuth';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});
  const {loading, setLoading} = useAuth();
  const handleError = () => {
    let errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    }
    if (password.length < 6) {
      errors.password = ' Password should be at least 6 characters';
    }
    if (password !== ConfirmPassword) {
      errors.ConfirmPassword = 'Password not match';
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async () => {
    if (handleError()) {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          updateProfile(user, {displayName: name});
          setLoading(false);
          console.log(user);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
      setEmail('');
      setPassword('');
      setName('');
      setConfirmPassword('');
      setError({});
    }
  };
  if (loading) return <Loading text="Creating account" />;
  return (
    <ImageBackground
      className="flex-1"
      resizeMode="cover"
      source={require('../../../assets/images/bg.png')}>
      <View className="flex-1 justify-center items-center gap-5">
        <View>
          <Text className="font-bold text-xl text-center ">Sign Up</Text>
          <Text className="text-white">Create a new account</Text>
        </View>
        <View className="w-[90%]">
          <Input
            label="Name"
            placeholder="Enter your name"
            Capitalize="none"
            secureText={false}
            value={name}
            textValue={text => setName(text)}
          />
          {error.name ? (
            <Text className="text-white text-sm pt-1 ml-2">{error.name}</Text>
          ) : null}
        </View>
        <View className="w-[90%]">
          <Input
            label="Email"
            placeholder="Enter your email"
            Capitalize="none"
            secureText={false}
            value={email}
            textValue={text => setEmail(text)}
          />
          {error.email ? (
            <Text className="text-white text-sm pt-1 ml-2">{error.email}</Text>
          ) : null}
        </View>
        <View className="w-[90%]">
          <Input
            label="Password"
            placeholder="Enter any password"
            secureText={true}
            value={password}
            textValue={text => setPassword(text)}
          />
          {error.password ? (
            <Text className="text-white text-sm pt-3 ml-2">
              {error.password}
            </Text>
          ) : null}
        </View>
        <View className="w-[90%]">
          <Input
            label="ConfirmPassword"
            placeholder="Confirm your password"
            secureText={true}
            value={ConfirmPassword}
            textValue={text => setConfirmPassword(text)}
          />
          {error.ConfirmPassword ? (
            <Text className="text-white text-sm pt-3 ml-2">
              {error.ConfirmPassword}
            </Text>
          ) : null}
        </View>
        <View className="w-[90%] pt-3">
          <CustomButton title="Sing Up" onPress={() => handleSubmit()} />
          <TouchableOpacity
            className="mt-2"
            onPress={() => navigation.navigate('Login')}>
            <Text className="text-white text-center">
              Already have an account?
              <Text className="text-teal-400 font-semibold">Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Signup;
