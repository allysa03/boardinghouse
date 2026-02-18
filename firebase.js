// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// 🔥 Replace below with your actual config from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyDWYdKhmBRKD7V4y54t5ifZGq3ZjIwBR88",
  authDomain: "boardinghousebyas.firebaseapp.com",
  projectId: "boardinghousebyas",
  storageBucket: "boardinghousebyas.firebasestorage.app",
  messagingSenderId: "616178692687",
  appId: "1:616178692687:web:7fd13a88bb1d2ec55fb03a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
