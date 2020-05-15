import ShopActionType from './shop.types';
import {
    firestore,
    convertCollectionsSnapshotTOMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
    type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
    type: ShopActionType.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef
            .get()
            .then((snapshot) => {
                const collectionMap = convertCollectionsSnapshotTOMap(snapshot);
                dispatch(fetchCollectionSuccess(collectionMap));
            })
            .catch((error) => dispatch(fetchCollectionFailure(error.message)));
    };
};
