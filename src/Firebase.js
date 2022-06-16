// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
const firebaseConfig = {
    apiKey: "AIzaSyDN9zJC8FuzSQjBa9ssBKzB7LJXYINCZC4",
    authDomain: "whatsapp-clone-dfcb1.firebaseapp.com",
    projectId: "whatsapp-clone-dfcb1",
    storageBucket: "whatsapp-clone-dfcb1.appspot.com",
    messagingSenderId: "944317870506",
    appId: "1:944317870506:web:e57c2eeff995c61b5f7bd3",
    measurementId: "G-Z9EN2FQ8JH"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;