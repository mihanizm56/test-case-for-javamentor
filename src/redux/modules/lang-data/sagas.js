import { call, put } from 'redux-saga/effects';
import { fetchLangRequest } from '../../../services/api';
import { putLangData } from './actions';

export function* fetchLangDataSaga(action) {
    try {
        const resultOfRequest = yield call(fetchLangRequest, action.payload);
        console.log('fetchLangDataSaga result ', resultOfRequest);
        const { data: { data: arrayOfLangInfo } = {} } = resultOfRequest;

        if (arrayOfLangInfo) {
            yield put(putLangData(arrayOfLangInfo));
        }
    } catch (error) {
        console.log('get an error in saga', error);
    }
}
