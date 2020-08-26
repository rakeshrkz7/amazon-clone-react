import firebase from "firebase";

//initialize firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCKHOArPj6XWqCDeeQXUFKHsLcMayDT-uQ",
  authDomain: "e-clone-d6c54.firebaseapp.com",
  databaseURL: "https://e-clone-d6c54.firebaseio.com",
  projectId: "e-clone-d6c54",
  storageBucket: "e-clone-d6c54.appspot.com",
  messagingSenderId: "661422805272",
  appId: "1:661422805272:web:b2853bd759362ee870ce6d",
  measurementId: "G-1K00JQSHHD",
});

const auth = firebaseApp.auth(); // access auth

export { auth };
