import ShopActionType from './shop.types';


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
       
    };
};
