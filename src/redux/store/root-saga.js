import { takeEvery } from "redux-saga/effects";
import { FETCH_LANG_DATA } from "../modules/lang-data";

function* rootSaga() {
  yield takeEvery(LOGIN_STATE_PENDING, authSaga);
}

export default rootSaga;
