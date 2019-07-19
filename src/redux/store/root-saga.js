import { takeEvery } from "redux-saga/effects";
import { FETCH_LANG_DATA, fetchLangDataSaga } from "../modules/lang-data";

function* rootSaga() {
  yield takeEvery(FETCH_LANG_DATA, fetchLangDataSaga);
}

export default rootSaga;
