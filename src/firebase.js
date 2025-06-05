// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM7GJxYYRa5I2cpAWnr4JZ-Vdl3QN3LDw",
  authDomain: "quickmail-95784.firebaseapp.com",
  projectId: "quickmail-95784",
  storageBucket: "quickmail-95784.firebasestorage.app",
  messagingSenderId: "423741098158",
  appId: "1:423741098158:web:607e982e09fc394da5c53f",
  measurementId: "G-9RPZ56ZLER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();

export const provider = new GoogleAuthProvider();
