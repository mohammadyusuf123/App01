import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/CustomButton';
import {useState} from 'react';
import Loading from '../../components/Loading/Loading';
import {auth} from '../../../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import useAuth from '../../../Hooks/useAuth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const {loading, setLoading} = useAuth();
  const handleError = () => {
    let errors = {};
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async () => {
    setLoading(true);
    if (handleError()) {
      await signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
      setEmail('');
      setPassword('');
      setError({});
    }
  };
  if (loading) return <Loading text="Login" />;

  return (
    <ImageBackground
      className="flex-1"
      resizeMode="cover"
      source={require('../../../assets/images/bg.png')}>
      <View className="flex-1 justify-center items-center gap-5">
        <View>
          <Text className="font-bold text-xl text-center ">Login</Text>
          <Text className="text-white">Login to your account</Text>
        </View>
        <View className="w-[90%]">
          <Input
            label="Email"
            value={email}
            textValue={text => setEmail(text)}
            secureText={false}
            placeholder="Enter your email"
            Capitalize="none"
          />
          {error.email ? (
            <Text className="text-white text-sm pt-1 ml-2">{error.email}</Text>
          ) : null}
        </View>
        <View className="w-[90%]">
          <Input
            label="Password"
            value={password}
            textValue={text => setPassword(text)}
            secureText={true}
            placeholder="Enter any password"
          />
          {error.password ? (
            <Text className="text-white text-sm pt-3 ml-2">
              {error.password}
            </Text>
          ) : null}
        </View>
        <View className="w-[90%] pt-3">
          <CustomButton
            title="Login"
            onPress={() => {
              handleSubmit();
            }}
          />
          <TouchableOpacity
            className="mt-2"
            onPress={() => navigation.navigate('Signup')}>
            <Text className="text-white text-center">
              Create a new account?
              <Text className="text-teal-400 font-semibold">Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
