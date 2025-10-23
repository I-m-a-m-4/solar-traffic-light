// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAu6lFV1MbBrALddLWO8BSMCWjf_sGr6Ag",
  authDomain: "traffic-system-dashboard.firebaseapp.com",
  databaseURL: "https://traffic-system-dashboard-default-rtdb.firebaseio.com",
  projectId: "traffic-system-dashboard",
  storageBucket: "traffic-system-dashboard.firebasestorage.app",
  messagingSenderId: "365780677979",
  appId: "1:365780677979:web:cc7144ec00d03dc549567e",
  measurementId: "G-N7EKDZEC9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
