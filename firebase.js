// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2fpCmVPaSQ19RxPjadDLc-ExF9-T2-Tk",
  authDomain: "inventory-management-app-e622f.firebaseapp.com",
  projectId: "inventory-management-app-e622f",
  storageBucket: "inventory-management-app-e622f.appspot.com",
  messagingSenderId: "1064867385529",
  appId: "1:1064867385529:web:85922e1ae587e0736c0b68",
  measurementId: "G-CRK3P37784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
