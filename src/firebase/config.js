import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC61_CSjb_Kx2inKVZhls3zjOxLpPzKtgk",
  authDomain: "beyza-firegram.firebaseapp.com",
  projectId: "beyza-firegram",
  storageBucket: "beyza-firegram.appspot.com",
  messagingSenderId: "346837582833",
  appId: "1:346837582833:web:99f7e3c8e2f2b58ada7a50",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// initialize storage
const projectStorage = firebase.storage();

// initialize database
const projectFirestore = firebase.firestore();

// function to get timestamp from firestore
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
