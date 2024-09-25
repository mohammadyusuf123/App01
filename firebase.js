// Import the functions you need from the SDKs you need
import {getApps, initializeApp, getApp} from 'firebase/app';
import {getAuth, EmailAuthProvider} from 'firebase/auth';
import {getFirestore, serverTimestamp} from 'firebase/firestore';
import {
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: 'AIzaSyDZN8H4X6zroxXNKSkc8w0EAQfqiTC9-iA',
  authDomain: 'tinder-clone-97c5a.firebaseapp.com',
  projectId: 'tinder-clone-97c5a',
  storageBucket: 'tinder-clone-97c5a.appspot.com',
  messagingSenderId: '350450908823',
  appId: '1:350450908823:web:1754264e83abaf588933d2',
};

// Initialize Firebase
let app, auth;

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (error) {
    console.log('Error initializing app: ' + error);
  }
} else {
  app = getApp();
  auth = getAuth(app);
}
const provider = new EmailAuthProvider();
const db = getFirestore();
const timestamp = serverTimestamp();
export {app, auth, provider, db, timestamp};
