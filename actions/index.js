import {takeEvery, all} from "redux-saga/effects";
import {userLoginAsync, userRegisterAsync} from "../sagas/sagas";


function* watchUserLogin() {
    yield takeEvery('USER_LOGIN_ATTEMPT', userLoginAsync);
}
function* watchUserRegister() {
    yield takeEvery('USER_REGISTER_ATTEMPT', userRegisterAsync);
}

export default function* rootSaga() {
    yield all([
        watchUserLogin(),
        watchUserRegister(),
    ])
}
