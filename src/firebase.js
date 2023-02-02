// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs3u_xQa9VjG0sCeAa1IsE-KtBVsq31jU",
  authDomain: "react-chat-app-36370.firebaseapp.com",
  projectId: "react-chat-app-36370",
  storageBucket: "react-chat-app-36370.appspot.com",
  messagingSenderId: "1071183426421",
  appId: "1:1071183426421:web:b15453f456c3e580b5593c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)