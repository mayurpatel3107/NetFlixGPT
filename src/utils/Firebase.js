// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBOB8UWvJpJW5U5BPOjUAQQneZydko0KE",
  authDomain: "netflixgpt-9c8db.firebaseapp.com",
  projectId: "netflixgpt-9c8db",
  storageBucket: "netflixgpt-9c8db.appspot.com",
  messagingSenderId: "582469943678",
  appId: "1:582469943678:web:ece832fcc830503212b32f",
  measurementId: "G-GHZL2LNQ11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
