// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVgTuLGGtIFaVftcmjs0n5_9BMSo_5ObE",
  authDomain: "food-blogger-946c0.firebaseapp.com",
  projectId: "food-blogger-946c0",
  storageBucket: "food-blogger-946c0.appspot.com",
  messagingSenderId: "779817571626",
  appId: "1:779817571626:web:799ea76ddfbb34e5853a53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;