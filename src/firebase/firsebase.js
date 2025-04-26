//DO NOT SHARE FIREBASE CONFIG ONLINE


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzkmYyrT7JvFn_sZzgiyvto8aC4ADDshQ",
  authDomain: "simple-firebas-auth-2e30e.firebaseapp.com",
  projectId: "simple-firebas-auth-2e30e",
  storageBucket: "simple-firebas-auth-2e30e.firebasestorage.app",
  messagingSenderId: "604197618840",
  appId: "1:604197618840:web:335f9dbf405e1a5956fced"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);