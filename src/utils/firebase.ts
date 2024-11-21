// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAbUSoddKXLB-brxqOMLdFPa-RaN7vTJiA",
    authDomain: "vue-firebase-5adb5.firebaseapp.com",
    projectId: "vue-firebase-5adb5",
    storageBucket: "vue-firebase-5adb5.firebasestorage.app",
    messagingSenderId: "193713183230",
    appId: "1:193713183230:web:6ba5cd5d6cc65a6bec48af"
};

// Inisialisasi Firebase
const firebase = initializeApp(firebaseConfig);

// Inisialisasi Authentication dan Google Provider
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

// Inisialisasi Firestore
const db = getFirestore(firebase);

// Ekspor Modul
export { auth, googleProvider, db };
