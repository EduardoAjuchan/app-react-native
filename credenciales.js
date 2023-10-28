// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCovaz5v1PM1APvAZ9GNqZdzsupNlWRm6k",
  authDomain: "appnotas-4fc83.firebaseapp.com",
  projectId: "appnotas-4fc83",
  storageBucket: "appnotas-4fc83.appspot.com",
  messagingSenderId: "808013053667",
  appId: "1:808013053667:web:8cd112e7fec4c789ad8fd6"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;