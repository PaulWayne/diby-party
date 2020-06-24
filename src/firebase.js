import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBNiWBjcfdv8nL8uQjnWQZGICBIIKgR0Y4",
  authDomain: "diby-party.firebaseapp.com",
  databaseURL: "https://diby-party.firebaseio.com",
  projectId: "diby-party",
  storageBucket: "diby-party.appspot.com",
  messagingSenderId: "144021815299",
  appId: "1:144021815299:web:8a7f664b042eedd030ce36",
  measurementId: "G-5NT0DL8SXV"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);