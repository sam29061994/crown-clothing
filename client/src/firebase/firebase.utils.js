import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// export const SHOP_DATA = {
//     hats: {
//         id: 1,
//         title: 'Hats',
//         routeName: 'hats',
//         items: [
//             {
//                 id: 1,
//                 name: 'Brown Brim',
//                 imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
//                 price: 25,
//             },
//             {
//                 id: 2,
//                 name: 'Blue Beanie',
//                 imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
//                 price: 18,
//             },
//             {
//                 id: 3,
//                 name: 'Brown Cowboy',
//                 imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
//                 price: 35,
//             },
//             {
//                 id: 4,
//                 name: 'Grey Brim',
//                 imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
//                 price: 25,
//             },
//             {
//                 id: 5,
//                 name: 'Green Beanie',
//                 imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
//                 price: 18,
//             },
//             {
//                 id: 6,
//                 name: 'Palm Tree Cap',
//                 imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
//                 price: 14,
//             },
//             {
//                 id: 7,
//                 name: 'Red Beanie',
//                 imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
//                 price: 18,
//             },
//             {
//                 id: 8,
//                 name: 'Wolf Cap',
//                 imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
//                 price: 14,
//             },
//             {
//                 id: 9,
//                 name: 'Blue Snapback',
//                 imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
//                 price: 16,
//             },
//             {
//                 id: 36,
//                 name: 'VA RVCA',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1556306535-0f09a537f0a3',
//                 price: 35,
//             },
//             {
//                 id: 37,
//                 name: 'Grace Chapel',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa',
//                 price: 55,
//             },
//             {
//                 id: 38,
//                 name: 'ice cream',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc',
//                 price: 15,
//             },
//             {
//                 id: 39,
//                 name: 'Grey Beanie',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1514642837906-76ed4698ec34',
//                 price: 20,
//             },
//             {
//                 id: 40,
//                 name: 'Yellow Beanie',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1490631537525-3b00d26805f9',
//                 price: 25,
//             },
//         ],
//     },
//     sneakers: {
//         id: 2,
//         title: 'Sneakers',
//         routeName: 'sneakers',
//         items: [
//             {
//                 id: 10,
//                 name: 'Adidas NMD',
//                 imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
//                 price: 220,
//             },
//             {
//                 id: 11,
//                 name: 'Adidas Yeezy',
//                 imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
//                 price: 280,
//             },
//             {
//                 id: 12,
//                 name: 'Black Converse',
//                 imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
//                 price: 110,
//             },
//             {
//                 id: 13,
//                 name: 'Nike White AirForce',
//                 imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
//                 price: 160,
//             },
//             {
//                 id: 14,
//                 name: 'Nike Red High Tops',
//                 imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
//                 price: 160,
//             },
//             {
//                 id: 15,
//                 name: 'Nike Brown High Tops',
//                 imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
//                 price: 160,
//             },
//             {
//                 id: 16,
//                 name: 'Air Jordan Limited',
//                 imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
//                 price: 190,
//             },
//             {
//                 id: 17,
//                 name: 'Timberlands',
//                 imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
//                 price: 200,
//             },
//             {
//                 id: 41,
//                 name: 'Daniel Storek',
//                 imageUrl:
//                     'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8',
//                 price: 250,
//             },
//             {
//                 id: 42,
//                 name: 'Red NIKE',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
//                 price: 299,
//             },
//             {
//                 id: 43,
//                 name: 'Converse White',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb',
//                 price: 200,
//             },
//             {
//                 id: 44,
//                 name: 'Blue Gangsta',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1521774971864-62e842046145',
//                 price: 233,
//             },
//             {
//                 id: 45,
//                 name: 'Converse ALLSTAR',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1578986175247-7d60c6df07c5',
//                 price: 249,
//             },
//             {
//                 id: 46,
//                 name: 'Blue Adidass',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1473010350295-2c82192ebd8e',
//                 price: 299,
//             },
//             {
//                 id: 47,
//                 name: 'Its Something',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1533680937690-d59ab2543468',
//                 price: 250,
//             },
//         ],
//     },
//     jackets: {
//         id: 3,
//         title: 'Jackets',
//         routeName: 'jackets',
//         items: [
//             {
//                 id: 18,
//                 name: 'Black Jean Shearling',
//                 imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
//                 price: 125,
//             },
//             {
//                 id: 19,
//                 name: 'Blue Jean Jacket',
//                 imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
//                 price: 90,
//             },
//             {
//                 id: 20,
//                 name: 'Grey Jean Jacket',
//                 imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
//                 price: 90,
//             },
//             {
//                 id: 21,
//                 name: 'Brown Shearling',
//                 imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
//                 price: 165,
//             },
//             {
//                 id: 22,
//                 name: 'Tan Trench',
//                 imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
//                 price: 185,
//             },
//             {
//                 id: 48,
//                 name: 'Blue Jean Donut',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef',
//                 price: 105,
//             },
//             {
//                 id: 49,
//                 name: 'Puma Black',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1556098539-3019e1bdf05e',
//                 price: 155,
//             },
//             {
//                 id: 50,
//                 name: 'Blue Kahen Trench',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1556900935-00eb4e5e0357',
//                 price: 185,
//             },
//             {
//                 id: 51,
//                 name: 'Yellow Trench',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1579265567569-b26e6469b52b',
//                 price: 199,
//             },
//             {
//                 id: 52,
//                 name: 'Blue Buddha',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1590270244935-ccf26523fb48',
//                 price: 125,
//             },
//             {
//                 id: 53,
//                 name: 'Simple Blue',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1591014703304-cd79baa5c695',
//                 price: 185,
//             },
//             {
//                 id: 54,
//                 name: 'Marron Jacket',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1501518721094-4a68edf38f97',
//                 price: 145,
//             },
//             {
//                 id: 55,
//                 name: 'Blue Navy',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1586732538099-5225ddcda02e',
//                 price: 155,
//             },
//             {
//                 id: 56,
//                 name: 'The Random',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1580051215498-3e2b858651b8',
//                 price: 165,
//             },
//             {
//                 id: 57,
//                 name: 'Aha Blue',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1554141331-68e37e3429ab',
//                 price: 195,
//             },
//         ],
//     },
//     womens: {
//         id: 4,
//         title: 'Womens',
//         routeName: 'womens',
//         items: [
//             {
//                 id: 23,
//                 name: 'Blue Tanktop',
//                 imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
//                 price: 25,
//             },
//             {
//                 id: 24,
//                 name: 'Floral Blouse',
//                 imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
//                 price: 20,
//             },
//             {
//                 id: 25,
//                 name: 'Floral Dress',
//                 imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
//                 price: 80,
//             },
//             {
//                 id: 26,
//                 name: 'Red Dots Dress',
//                 imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
//                 price: 80,
//             },
//             {
//                 id: 27,
//                 name: 'Striped Sweater',
//                 imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
//                 price: 45,
//             },
//             {
//                 id: 28,
//                 name: 'Yellow Track Suit',
//                 imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
//                 price: 135,
//             },
//             {
//                 id: 29,
//                 name: 'White Blouse',
//                 imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
//                 price: 220,
//             },
//             {
//                 id: 58,
//                 name: 'Blue Blouse',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1572679079418-de9c4361425d',
//                 price: 120,
//             },
//             {
//                 id: 59,
//                 name: 'Black Shirt',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1583452208101-7c1cc44c4132',
//                 price: 156,
//             },
//             {
//                 id: 60,
//                 name: 'Black Leather Jacket',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1553335762-4432a3334a1a',
//                 price: 142,
//             },
//             {
//                 id: 61,
//                 name: 'Navy Jacket',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1573461896412-aa90f418902e',
//                 price: 200,
//             },
//             {
//                 id: 62,
//                 name: 'Aroma Jacket',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1572258019448-82032a128bb7',
//                 price: 220,
//             },
//             {
//                 id: 63,
//                 name: 'Bright Yellow Blouse',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1553845911-9e88516bdcbe',
//                 price: 155,
//             },
//             {
//                 id: 64,
//                 name: 'Black Jean Blouse',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1542176754-04c0275d2c25',
//                 price: 145,
//             },
//             {
//                 id: 65,
//                 name: 'White Net Blouse',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1542648870-438579cbd0ba',
//                 price: 122,
//             },
//             {
//                 id: 66,
//                 name: 'Flower Dress',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1541788682006-ae10463bdffa',
//                 price: 138,
//             },
//             {
//                 id: 67,
//                 name: 'Red Blouse',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1541789253176-c0482226c6d6',
//                 price: 205,
//             },
//         ],
//     },
//     mens: {
//         id: 5,
//         title: 'Mens',
//         routeName: 'mens',
//         items: [
//             {
//                 id: 30,
//                 name: 'Camo Down Vest',
//                 imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
//                 price: 325,
//             },
//             {
//                 id: 31,
//                 name: 'Floral T-shirt',
//                 imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
//                 price: 20,
//             },
//             {
//                 id: 32,
//                 name: 'Black & White Longsleeve',
//                 imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
//                 price: 25,
//             },
//             {
//                 id: 33,
//                 name: 'Pink T-shirt',
//                 imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
//                 price: 25,
//             },
//             {
//                 id: 34,
//                 name: 'Jean Long Sleeve',
//                 imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
//                 price: 40,
//             },
//             {
//                 id: 35,
//                 name: 'Burgundy T-shirt',
//                 imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
//                 price: 205,
//             },
//             {
//                 id: 68,
//                 name: 'Brown Jacket',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1553143820-6bb68bc34679',
//                 price: 45,
//             },
//             {
//                 id: 69,
//                 name: 'Blue Professional Shirt',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1530645173971-e0350dae2364',
//                 price: 45,
//             },
//             {
//                 id: 70,
//                 name: 'Denim Jacket',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1516257984-b1b4d707412e',
//                 price: 55,
//             },
//             {
//                 id: 71,
//                 name: 'Black Jacket',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1520975916090-3105956dac38',
//                 price: 85,
//             },
//             {
//                 id: 72,
//                 name: 'Red T-shirt',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1484517062256-430351efcbcf',
//                 price: 55,
//             },
//             {
//                 id: 73,
//                 name: 'HERA T-shirt',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1553629823-36e0c50fee2d',
//                 price: 250,
//             },
//             {
//                 id: 74,
//                 name: 'Adidas T-shirt',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1548376111-8b07febd313b',
//                 price: 255,
//             },
//             {
//                 id: 75,
//                 name: 'B White T-shirt',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450',
//                 price: 210,
//             },
//             {
//                 id: 76,
//                 name: 'Black Winter Jacket',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1527888134035-745830ac26fd',
//                 price: 100,
//             },
//             {
//                 id: 77,
//                 name: 'Old Navy Jeans',
//                 imageUrl:
//                     'https://images.unsplash.com/photo-1556301590-319c5b2ac83d',
//                 price: 250,
//             },
//         ],
//     },
// };

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

export const addCollectionAndDocuments = async (collectionKey, objects) => {
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
