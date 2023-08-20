// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7TsC3nvR984C5vtNvs619V8UET4qQulU",
  authDomain: "tao33-b3b48.firebaseapp.com",
  projectId: "tao33-b3b48",
  storageBucket: "tao33-b3b48.appspot.com",
  messagingSenderId: "85173554325",
  appId: "1:85173554325:web:e2171f71dae7a9529b9f9c",
  measurementId: "G-XS46GRTE4W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
