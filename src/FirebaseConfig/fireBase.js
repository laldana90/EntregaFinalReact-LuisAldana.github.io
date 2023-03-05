// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm2g9vxpJNTEjDRtmZeZvcNqCQZ-vZFKk",
  authDomain: "reactgamezone.firebaseapp.com",
  projectId: "reactgamezone",
  storageBucket: "reactgamezone.appspot.com",
  messagingSenderId: "963243393384",
  appId: "1:963243393384:web:7dfd42ca7fc7e72fbf96dd",
  measurementId: "G-B0S7279J3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore (app)