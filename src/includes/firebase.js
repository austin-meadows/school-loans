import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";

const config = {
  apiKey: "AIzaSyAgwVzvpvM7foyyzRRQGFQzHKD-rgq1Uas",
  authDomain: "school-loans-2d40e.firebaseapp.com",
  databaseURL: "https://school-loans-2d40e.firebaseio.com",
  projectId: "school-loans-2d40e",
  storageBucket: "school-loans-2d40e.appspot.com",
  messagingSenderId: "477013446075",
  appId: "1:477013446075:web:fafca2d1e5cb080f28489e",
  measurementId: "G-KLWFQ1WTW0",
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const perf = firebase.performance();
