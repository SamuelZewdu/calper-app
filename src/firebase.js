// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCMjBudiW9wByv4JIarJkMe9BA_xxiGoY",
    authDomain: "calper-app.firebaseapp.com",
    projectId: "calper-app",
    storageBucket: "calper-app.appspot.com",
    messagingSenderId: "635070457588",
    appId: "1:635070457588:web:3c2e918068a6e7b8c2a0a1",
    measurementId: "G-W4RMQ5T5N7"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app