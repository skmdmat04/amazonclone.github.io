import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4I_xHf0ygCMrzlgMyZ4JrScCDNV9cXzA",
  authDomain: "clone-35651.firebaseapp.com",
  projectId: "clone-35651",
  storageBucket: "clone-35651.appspot.com",
  messagingSenderId: "529666674655",
  appId: "1:529666674655:web:08dba9a453ef17bdab7e6a",
  measurementId: "G-ZQY7HVRDZ0"
};
const app = initializeApp(firebaseConfig);
// const db= firebaseApp.firestore();
const auth = getAuth(app);
export {auth};

///copy
// const firebaseConfig = {
//   apiKey: "AIzaSyD4I_xHf0ygCMrzlgMyZ4JrScCDNV9cXzA",
//   authDomain: "clone-35651.firebaseapp.com",
//   projectId: "clone-35651",
//   storageBucket: "clone-35651.appspot.com",
//   messagingSenderId: "529666674655",
//   appId: "1:529666674655:web:08dba9a453ef17bdab7e6a",
//   measurementId: "G-ZQY7HVRDZ0"
// };