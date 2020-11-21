import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAHyazM4ydpGn0lcO3Q6W1pOKcUuYZ4XvQ",
  authDomain: "vue-project-36be1.firebaseapp.com",
  databaseURL: "https://vue-project-36be1.firebaseio.com",
  projectId: "vue-project-36be1",
  storageBucket: "vue-project-36be1.appspot.com",
  messagingSenderId: "800822465487",
  appId: "1:800822465487:web:72e7c82103d23c256478ba"
};
// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();
// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
