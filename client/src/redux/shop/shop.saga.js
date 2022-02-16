import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
    firestore,
    convertCollectionsSnapshotTOMap,
} from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions';

import ShopActionType from './shop.types';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotTOMap,
            snapshot
        );
        yield put(fetchCollectionSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionType.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}
export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}
