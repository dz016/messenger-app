import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-dd990.firebaseapp.com",
  projectId: "react-chat-dd990",
  storageBucket: "react-chat-dd990.appspot.com",
  messagingSenderId: "249910283397",
  appId: "1:249910283397:web:16f5ea19588b04b9d22dec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
