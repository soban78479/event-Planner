// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_KpYrGX6OWQTXLBkWxGIdcS17F1qeKX0",
  authDomain: "next-jscrud.firebaseapp.com",
  projectId: "next-jscrud",
  storageBucket: "next-jscrud.appspot.com",
  messagingSenderId: "253142705131",
  appId: "1:253142705131:web:fe754fc37083fce5826fae",
  measurementId: "G-M42EPMCEDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth()
const db = getFirestore(app);
const storage = getStorage();
export { db, storage };


