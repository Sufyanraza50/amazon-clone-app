import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAAbVJr1aP1uP9yHL4cR5VFcgSe7BtppZM",
    authDomain: "clone-aa2dd.firebaseapp.com",
    projectId: "clone-aa2dd",
    storageBucket: "clone-aa2dd.appspot.com",
    messagingSenderId: "263364304749",
    appId: "1:263364304749:web:37575187ea0a74416d8464"
});

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};