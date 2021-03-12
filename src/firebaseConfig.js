// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2-s58CItjDYxYrbPL3FVYkX9PEOnGfuM",
    authDomain: "myproject-f5dad.firebaseapp.com",
    projectId: "myproject-f5dad",
    storageBucket: "myproject-f5dad.appspot.com",
    messagingSenderId: "1098534321556",
    appId: "1:1098534321556:web:236a0703c53351ff712381",
    measurementId: "G-TG8R4TRPRF"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Sign in with Google
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

//Sign in with email/password
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists){
    const { email, displayName } = user;
    try {
      await userRef.set({
        displayName,
        email
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error){
    console.error("Error fetching user", error);
  }
};