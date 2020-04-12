import {takeEvery, all} from "redux-saga/effects";
import userLoginAsync from "../sagas/sagas";


function* watchUserLogin() {
    yield takeEvery('USER_LOGIN_ATTEMPT', userLoginAsync);
}

export default function* rootSaga() {
    yield all([
        watchUserLogin(),
    ])
}
