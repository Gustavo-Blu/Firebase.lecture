import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBGSq_0akqGbNZrq0pmK3AcW0NjR9obJsk",
    authDomain: "fir-lecture-7ae49.firebaseapp.com",
    databaseURL: "https://fir-lecture-7ae49-default-rtdb.firebaseio.com",
    projectId: "fir-lecture-7ae49",
    storageBucket: "fir-lecture-7ae49.appspot.com",
    messagingSenderId: "215846803769",
    appId: "1:215846803769:web:54a4fc91840107459270e8",
    measurementId: "G-L07H383M3W"
};

const app = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app);

const database = firebase.database();


export default database
