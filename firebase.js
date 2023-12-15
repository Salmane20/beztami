// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDcmlsKFc1EtyP_Zf9To2tgTrB6XxjM2k",
  authDomain: "beztami-60fd7.firebaseapp.com",
  databaseURL: "https://beztami-60fd7-default-rtdb.firebaseio.com",
  projectId: "beztami-60fd7",
  storageBucket: "beztami-60fd7.appspot.com",
  messagingSenderId: "535262801857",
  appId: "1:535262801857:web:7033d598aaba5ca12d4940",
  measurementId: "G-50J8L7M870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);