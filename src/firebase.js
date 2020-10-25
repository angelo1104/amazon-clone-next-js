import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDu5O2id_NkMW25B-qYfJ-sU9SRM0hE2qo",
    authDomain: "subtle-anthem-265314.firebaseapp.com",
    databaseURL: "https://subtle-anthem-265314.firebaseio.com",
    projectId: "subtle-anthem-265314",
    storageBucket: "subtle-anthem-265314.appspot.com",
    messagingSenderId: "1063573991139",
    appId: "1:1063573991139:web:c4d29792977d1798f35fd6",
    measurementId: "G-W6C68RH22Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth()
const database = firebaseApp.firestore()
const storage = firebaseApp.storage()

export {auth,database,storage}