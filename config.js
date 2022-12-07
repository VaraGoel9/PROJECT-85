import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAvefi11v0vd0tt9e2uF38Lap8EnjUTLdQ",
  authDomain: "e-ride-a07c8.firebaseapp.com",
  projectId: "e-ride-a07c8",
  storageBucket: "e-ride-a07c8.appspot.com",
  messagingSenderId: "360140398144",
  appId: "1:360140398144:web:dd1abac46d7e01db3709a5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
