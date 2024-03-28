// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAHRuJiLWJbpHYkgg3Rt2JFwLRKfgI6sY",
  authDomain: "guestbook-d2990.firebaseapp.com",
  projectId: "guestbook-d2990",
  storageBucket: "guestbook-d2990.appspot.com",
  messagingSenderId: "913936628881",
  appId: "1:913936628881:web:cd91cc6fd4406240325330",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (error) {
    console.log(error);
  }
};

const passwordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};
export {
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  auth,
  passwordReset,
};
