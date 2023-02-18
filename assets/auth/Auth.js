// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRGW6aL1oasBIbdS9UiHFFbMqyccx9KGU",
  authDomain: "fullflix-react-native-app.firebaseapp.com",
  projectId: "fullflix-react-native-app",
  storageBucket: "fullflix-react-native-app.appspot.com",
  messagingSenderId: "30230289956",
  appId: "1:30230289956:web:f67b1d3344ad9c249c82b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)