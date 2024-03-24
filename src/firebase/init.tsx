// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "foodio-5c386.firebaseapp.com",
  projectId: "foodio-5c386",
  storageBucket: "foodio-5c386.appspot.com",
  messagingSenderId: "1007123264474",
  appId: "1:1007123264474:web:3d63f04ef2cbf4609dc6e3",
  measurementId: "G-2E1Y1Q4L2P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
