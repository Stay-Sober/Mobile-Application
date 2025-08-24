import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


// // Firebase Address
// const firebaseConfig = {
//   apiKey: "AIzaSyDSIsU4TMjJqgJnCCYEc-hIFVGsur9Lqf4",
//   authDomain: "dsw-project-eaadd.firebaseapp.com",
//   projectId: "https://github.com/Stay-Sober/Mobile-Application.githttps://github.com/Stay-Sober/Mobile-Application.git-eaadd",
//   storageBucket: "dsw-project-eaadd.appspot.com",
//   messagingSenderId: "710477496694",
//   appId: "1:710477496694:web:940a6b6f04b4e2dfbc3a57",
//   measurementId: "G-NXHX9VGVWH"
// };


// // Initialize Firebase
// const fireApp = firebase.initializeApp(firebaseConfig);

// export default fireApp;
// export const auth = getAuth();
// export const resetPasswordEmail = sendPasswordResetEmail();
// export const db = fireApp.firestore();