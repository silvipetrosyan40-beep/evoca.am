// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl5C1P2VVzJWepdLcCsQ_csGknhl0w4uk",
  authDomain: "evoca-am-8e82c.firebaseapp.com",
  projectId: "evoca-am-8e82c",
  storageBucket: "evoca-am-8e82c.firebasestorage.app",
  messagingSenderId: "855851740570",
  appId: "1:855851740570:web:93cdacf4c0d5c8892e9e23",
  measurementId: "G-NJX1Y769WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);