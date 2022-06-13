import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyD6e9M-4YKYdRMGSLNkH-hIHeKSW41PkH0",

  authDomain: "twitter-build-e206a.firebaseapp.com",

  projectId: "twitter-build-e206a",

  storageBucket: "twitter-build-e206a.appspot.com",

  messagingSenderId: "605592184837",

  appId: "1:605592184837:web:3689d5b9aeb6a5412e946c"

};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
