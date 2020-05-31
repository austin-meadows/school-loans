import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";

const config = {
  apiKey: "AIzaSyDT5QHPzN9PqSJcS0t9IxVpUjxga--un6E",
  appId: "1:440598924881:web:ead114616680ce10a1b270",
  authDomain: "school-loans-a2f95.firebaseapp.com",
  databaseURL: "https://school-loans-a2f95.firebaseio.com",
  measurementId: "G-8N7TX6BQL6",
  messagingSenderId: "440598924881",
  projectId: "school-loans-a2f95",
  storageBucket: "school-loans-a2f95.appspot.com",
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const perf = firebase.performance();
