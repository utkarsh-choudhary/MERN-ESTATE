// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-512a3.firebaseapp.com",
  projectId: "mern-estate-512a3",
  storageBucket: "mern-estate-512a3.appspot.com",
  messagingSenderId: "611653665372",
  appId: "1:611653665372:web:b2219f59c9e83ff9c65c99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);