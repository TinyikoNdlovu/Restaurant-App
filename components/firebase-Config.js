// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7wvs8eImGKWotd10bSQ2x3HRBH9f4v84",
  authDomain: "restaurant-app-f8bae.firebaseapp.com",
  projectId: "restaurant-app-f8bae",
  storageBucket: "restaurant-app-f8bae.appspot.com",
  messagingSenderId: "53243607419",
  appId: "1:53243607419:web:ad4d0b49f4c0597360e5de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const provider = new GoogleAuthProvider();