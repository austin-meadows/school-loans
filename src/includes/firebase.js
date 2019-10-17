import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";

const config = {
  apiKey: "AIzaSyDeCY8cfGRfgbE835G9brcsiNiQhkKhV4A",
  appId: "1:431090940964:web:90c18035de7941e5e9acb1",
  authDomain: "school-loans-59a5b.firebaseapp.com",
  databaseURL: "https://school-loans-59a5b.firebaseio.com",
  measurementId: "G-K9F6LMJJ2N",
  messagingSenderId: "431090940964",
  projectId: "school-loans-59a5b",
  storageBucket: "school-loans-59a5b.appspot.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const perf = firebase.performance();
