import { call, put } from 'redux-saga/effects'
import { fetchLangRequest } from '../../../services/api'
import { putLangData } from './actions'

export function * fetchLangDataSaga (action) {
    try {
        const data = yield call(fetchLangRequest, action.payload)
        console.log('fetchLangDataSaga result ', data)

        yield put(putLangData(data))
    } catch (error) {
        console.log('get an error in saga', error)
    }
}
