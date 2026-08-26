import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRgPuoaWfMq4XqZUX45e3mSj_t8qKZP3s",
  authDomain: "memo-website-fa869.firebaseapp.com",
  projectId: "memo-website-fa869",
  storageBucket: "memo-website-fa869.firebasestorage.app",
  messagingSenderId: "903524370049",
  appId: "1:903524370049:web:893b26873a0f41e1376f80",
  measurementId: "G-4W9MJK3E9L"
};

// Prevent re-initialization during Next.js Hot Module Reloads (HMR)
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);