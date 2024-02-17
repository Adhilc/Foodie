// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO1s_piVNJW2NJ3WcQwRHuNJ7Kkw9ud_8",
  authDomain: "grubhub-cf305.firebaseapp.com",
  projectId: "grubhub-cf305",
  storageBucket: "grubhub-cf305.appspot.com",
  messagingSenderId: "737772100586",
  appId: "1:737772100586:web:a6b397b8c02f9345143093",
  measurementId: "G-V76EQDP375"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);