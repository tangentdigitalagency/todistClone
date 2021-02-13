import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeAp({
    apiKey: "AIzaSyC39GAFU5BRbRksSD5wQuaRrSz41yMXC18",
    authDomain: "todoist-c3597.firebaseapp.com",
    databaseURL: "https://todoist-c3597-default-rtdb.firebaseio.com",
    projectId: "todoist-c3597",
    storageBucket: "todoist-c3597.appspot.com",
    messagingSenderId: "11383012462",
    appId: "1:11383012462:web:1e7e478dc1c3e1d2cfba7f",
});

export {firebaseConfig as firebase}