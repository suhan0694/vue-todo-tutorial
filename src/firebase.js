import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDxdSDIuykJXwav_j20u09St5XGA2QdxAk",
    authDomain: "todos-vue-3a638.firebaseapp.com",
    databaseURL: "https://todos-vue-3a638.firebaseio.com",
    projectId: "todos-vue-3a638",
    storageBucket: "todos-vue-3a638.appspot.com",
    messagingSenderId: "175280652338",
    appId: "1:175280652338:web:8fb34b9865b9396a577c2b",
    measurementId: "G-PS7SD29YY3",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseapp.firestore();

export default firestore;
