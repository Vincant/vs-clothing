import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCn8r9XGiCMKMRiLSThefOk1thKSJukYQk",
  authDomain: "vs-clothing.firebaseapp.com",
  databaseURL: "https://vs-clothing.firebaseio.com",
  projectId: "vs-clothing",
  storageBucket: "vs-clothing.appspot.com",
  messagingSenderId: "893961345961",
  appId: "1:893961345961:web:b24337771a3af27ea002b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return; 

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot =  await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }) 
    } catch(error){
      console.log('error creating user', error.massage);
    }
  }

  return userRef;
}

// base exports
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// auth with Google
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ display: 'popup' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// auth with Facebook
const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ display: 'popup' });
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

//firebase.auth().signInWithRedirect(provider);

export default firebase;