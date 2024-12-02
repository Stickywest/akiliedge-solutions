import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyD7E0KtTa0BARnZ1FHJal4Ah_b6Uk7oBR8",
    authDomain: "akiliedge-96b6a.firebaseapp.com",
    projectId: "akiliedge-96b6a",
    storageBucket: "akiliedge-96b6a.appspot.com", // Fixed storage bucket URL
    messagingSenderId: "1050262317463",
    appId: "1:1050262317463:web:f0f5786957a947e65e3cd2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Initialize Firestore
