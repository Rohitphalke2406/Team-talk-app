// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCUgDXQ480syx0L_THgpnXfpJZSeJrTYNE",
  authDomain: "slack-clone-766cc.firebaseapp.com",
  projectId: "slack-clone-766cc",
  storageBucket: "slack-clone-766cc.appspot.com",
  messagingSenderId: "603632335587",
  appId: "1:603632335587:web:4898e8cb237e0bf03c63d6",
  measurementId: "G-5FDR1JELC5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Initialize Firebase Auth
const auth = getAuth(firebaseApp);

export { db, auth };



  
  