import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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
