// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjHfC-Imtjqcmd7lKP1ei83BSiwZPbiNA",
  authDomain: "json-editor-71fb8.firebaseapp.com",
  projectId: "json-editor-71fb8",
  storageBucket: "json-editor-71fb8.appspot.com",
  messagingSenderId: "418973358586",
  appId: "1:418973358586:web:fc3ff221a165e63d662c43",
  measurementId: "G-YXT1FN2H32",
  databaseURL: "https://json-editor-71fb8-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Get a reference to the database service
export const database = getDatabase(app);
