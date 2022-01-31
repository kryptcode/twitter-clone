import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDeu4iivkbwlCe1prOw5vfk4Q-mKSbdCNc",
    authDomain: "twitter-clone-96c9d.firebaseapp.com",
    projectId: "twitter-clone-96c9d",
    storageBucket: "twitter-clone-96c9d.appspot.com",
    messagingSenderId: "176637391896",
    appId: "1:176637391896:web:3da5008d14cbd69bc9ff6d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };