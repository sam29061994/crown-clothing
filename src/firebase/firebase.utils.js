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
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (err) {
            console.log(err.message);
        }
    }
    return userRef;
};

export const addCollecctionAndDocuments = async (collectionKey, objects) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
    const batch = firestore.batch();
    objects.forEach((object) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, object);
    });
    return await batch.commit();
};

export const convertCollectionsSnapshotTOMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data();
        return {
            id: doc.id,
            title,
            items,
            routeName: encodeURI(title.toLowerCase()),
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

firebase.initializeApp(config);

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribeFromAuth = auth.onAuthStateChanged((userAuth) => {
            unsubscribeFromAuth();
            resolve(userAuth);
        }, reject);
    });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
