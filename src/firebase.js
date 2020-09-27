// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//   };

import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    // const firebaseConfig = {
    apiKey: "AIzaSyDa01JzuXEdoNOBD__W2QH1ouEmeQZw3Ho",
    authDomain: "todoapp-cece5.firebaseapp.com",
    databaseURL: "https://todoapp-cece5.firebaseio.com",
    projectId: "todoapp-cece5",
    storageBucket: "todoapp-cece5.appspot.com",
    messagingSenderId: "672368711528",
    appId: "1:672368711528:web:4553589ad596d6021568dd",
    measurementId: "G-DELLNLCCL8"

});

const db= firebaseApp.firestore();

export { db };