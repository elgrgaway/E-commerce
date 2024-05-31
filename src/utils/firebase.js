// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl9Y4ONh1Y9F8qnfSkOSGALB4O5kBBtxA",
  authDomain: "e-commerce-almadrasa.firebaseapp.com",
  projectId: "e-commerce-almadrasa",
  storageBucket: "e-commerce-almadrasa.appspot.com",
  messagingSenderId: "615119541340",
  appId: "1:615119541340:web:0fe157497c371b01bd4299",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app)
export default app;
