import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

// Setting up firebase emulator
// https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29769062#questions/16613524

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'house-marketplace-app-607be.firebaseapp.com',
  projectId: 'house-marketplace-app-607be',
  storageBucket: 'house-marketplace-app-607be.appspot.com',
  messagingSenderId: '696561405724',
  appId: '1:696561405724:web:208983e40ec8402906b4d9',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
const storage = getStorage();

// if (process.env.NODE_ENV !== 'production') {
//   connectFirestoreEmulator(db, 'localhost', 8080);
//   connectAuthEmulator(auth, 'http://localhost:9099');
//   connectStorageEmulator(storage, 'localhost', 9199);
// }
