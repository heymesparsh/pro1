import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBBSX8tczCaXVtLTAw8849uk__dGNs8tCE",
  authDomain: "auth-development-f10ee.firebaseapp.com",
  projectId: "auth-development-f10ee",
  storageBucket: "auth-development-f10ee.appspot.com",
  messagingSenderId: "367149640604",
  appId: "1:367149640604:web:dcf07e2e997f932d24f659",
});

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

export const auth = app.auth();
export default app;
