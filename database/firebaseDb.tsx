import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBFShbrYKpPeK_Ca3zr90ytmfLGHYxUz7w',
  authDomain: 'react-native-crud-1793b.firebaseapp.com',
  projectId: 'react-native-crud-1793b',
  storageBucket: 'react-native-crud-1793b.appspot.com',
  messagingSenderId: '635428780731',
  appId: '1:635428780731:web:4ee482f1eb244a97d6079e',
  measurementId: 'G-XXRCZN90KW',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
