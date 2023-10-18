// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern--estate.firebaseapp.com",
  projectId: "mern--estate",
  storageBucket: "mern--estate.appspot.com",
  messagingSenderId: "313156919076",
  appId: "1:313156919076:web:d93e477edad56d0b86ddb1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 