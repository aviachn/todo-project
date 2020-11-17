import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyArjCyAhRGa_8yUrKeJeRZgtaErfW2l0bg",
    authDomain: "task-manager-77b53.firebaseapp.com",
    databaseURL: "https://task-manager-77b53.firebaseio.com",
    projectId: "task-manager-77b53",
    storageBucket: "task-manager-77b53.appspot.com",
    messagingSenderId: "873726692624",
    appId: "1:873726692624:web:16233e41945d21da39e995",
    measurementId: "G-LQDW4TJJGB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  //Initialize a connection to the firestore db
  const db = firebase.firestore();

  db.settings({ tomestampsInSnapshots: true });

  export default db;