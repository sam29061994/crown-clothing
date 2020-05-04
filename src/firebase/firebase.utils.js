import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBcuPwclnfgbgh-zirL3ORPpy2dFuPkcLk',
  authDomain: 'crwn-db-2bb6f.firebaseapp.com',
  databaseURL: 'https://crwn-db-2bb6f.firebaseio.com',
  projectId: 'crwn-db-2bb6f',
  storageBucket: 'crwn-db-2bb6f.appspot.com',
  messagingSenderId: '314835865054',
  appId: '1:314835865054:web:a9abe611a130c20252a14f',
  measurementId: 'G-JLR0V4Z3R6',
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
