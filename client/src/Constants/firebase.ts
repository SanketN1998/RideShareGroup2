// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-dPKrCuOb_4fnVloPUcwZNemMUCa_f2w",
  authDomain: "finalprojectgroup2-c3a3d.firebaseapp.com",
  projectId: "finalprojectgroup2-c3a3d",
  storageBucket: "finalprojectgroup2-c3a3d.appspot.com",
  messagingSenderId: "699980807457",
  appId: "1:699980807457:web:46ccb4ff62d2ac43061260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}