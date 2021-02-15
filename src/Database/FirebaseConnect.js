import firebase from 'firebase'
import { firestore } from "firebase/firestore";
import  "firebase/auth";


export const firebaseConfig = {
    apiKey: "AIzaSyAEKeJK3cB7fkELjowJXi7INutc6h78Rv0",
    authDomain: "venza-9f661.firebaseapp.com",
    databaseURL: "https://venza-9f661.firebaseio.com",
    projectId: "venza-9f661",
    storageBucket: "venza-9f661.appspot.com",
    messagingSenderId: "1003095374186",
    appId: "1:1003095374186:web:3a8f7722f9a055db8f0d13"
  };


firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
 export const auth = firebase.auth()  

 