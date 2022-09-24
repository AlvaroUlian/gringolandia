// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzjRr-DNRIVkSz5vLoesAra89iHhlb_Wc",
  authDomain: "gringolandia-cab6a.firebaseapp.com",
  projectId: "gringolandia-cab6a",
  storageBucket: "gringolandia-cab6a.appspot.com",
  messagingSenderId: "266403828966",
  appId: "1:266403828966:web:da378166077da5c720d727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);