import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBwXBMZkXmGByXZZLKHhcv5aS00aLkIrHE",
    authDomain: "tinder-clone-eefd9.firebaseapp.com",
    projectId: "tinder-clone-eefd9",
    storageBucket: "tinder-clone-eefd9.appspot.com",
    messagingSenderId: "468064296112",
    appId: "1:468064296112:web:39ec5f69d696a7319def75"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;