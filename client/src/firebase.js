// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-ca4ae.firebaseapp.com",
  projectId: "mern-auth-ca4ae",
  storageBucket: "mern-auth-ca4ae.appspot.com",
  messagingSenderId: "504686242302",
  appId: "1:504686242302:web:6e9d39be9a89ec8c74b8af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);