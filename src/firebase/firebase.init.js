// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg0LPAnsCLD80dorZNe0JwasKSuAOakYY",
  authDomain: "auth-integration-6abc2.firebaseapp.com",
  projectId: "auth-integration-6abc2",
  storageBucket: "auth-integration-6abc2.firebasestorage.app",
  messagingSenderId: "166381253410",
  appId: "1:166381253410:web:ff18446d98e0b4438aab7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
