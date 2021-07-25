import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyC5jrhFaysIS46hnHeYmjbDoOPstfqGpsk",
    authDomain: "chat-app-b185e.firebaseapp.com",
    projectId: "chat-app-b185e",
    storageBucket: "chat-app-b185e.appspot.com",
    messagingSenderId: "601271744815",
    appId: "1:601271744815:web:b65ef2a6ea6a9d9cba89da",
    measurementId: "G-1MXGNNFXJB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
    db.useEmulator('localhost','8080')
}

export { auth, db };

export default firebase;