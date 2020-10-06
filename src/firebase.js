import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDqEGe-ZPQheT6RegvgqEDEvdH2ehEk7SQ',
  authDomain: 'spotify-kailash.firebaseapp.com',
  databaseURL: 'https://spotify-kailash.firebaseio.com',
  projectId: 'spotify-kailash',
  storageBucket: 'spotify-kailash.appspot.com',
  messagingSenderId: '1070732081978',
  appId: '1:1070732081978:web:8a67052ef181b33f36ae03',
  measurementId: 'G-99DVL7WETG',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
