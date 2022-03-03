import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB7suJMM9kruSC3x0ij3pVD4_uP4alJcRs",
    authDomain: "sogang-university-cafeteria.firebaseapp.com",
    projectId: "sogang-university-cafeteria",
    storageBucket: "sogang-university-cafeteria.appspot.com",
    messagingSenderId: "290173498715",
    appId: "1:290173498715:web:486104a0fa24aa633b567e",
    measurementId: "G-S1J5LTM8GY"
 };

 // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth=firebaseApp.auth();