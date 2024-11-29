// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2qU8YnkA89UHTZJxL-n3ZZ-maYZu8Zow",
  authDomain: "simple-firebase-fa91e.firebaseapp.com",
  projectId: "simple-firebase-fa91e",
  storageBucket: "simple-firebase-fa91e.firebasestorage.app",
  messagingSenderId: "825975511038",
  appId: "1:825975511038:web:17692dc8e60764127292af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);
