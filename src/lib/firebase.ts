import  { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAgN_knUvzQu6rq4aH2qpmEBXUCgLT4Jvw",
  authDomain: "soil-crop-advisor.firebaseapp.com",
  projectId: "soil-crop-advisor",
  storageBucket: "soil-crop-advisor.firebasestorage.app",
  messagingSenderId: "834687015818",
  appId: "1:834687015818:web:7cb7d68ac71276e8384673",
  measurementId: "G-1XPPF6H9LT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
 