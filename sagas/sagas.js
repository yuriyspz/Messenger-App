import axios from 'axios'
import {call, put} from 'redux-saga/effects';
import {navigate} from '../App'
import {takeEvery, all} from "redux-saga/effects";
import {userLoginAction, userRegisterAction} from "../actions";

const url = `https://fluxjwt-app.herokuapp.com/api/`

//Sign in
const userLogin = (username, password) => {
    return axios.post(`${url}security/login`, {username, password})
        .then(response => response.data);
}

export function* userLoginAsync(action) {
    try {
        const response = yield call(userLogin, action.username, action.password);
        console.log(response);
        yield put(userLoginAction(response.token));
    } catch (error) {
        return console.log(error);
    }
}

// Register
const userRegister = (details) => {
    return axios.post(`${url}security/registration`, details)
        .then(response => {
            console.log(response.data)
            navigate('Sign In');
            return response.data
        })
        .catch(error => console.log(error));
}

export function* userRegisterAsync(action) {
    try {
        console.log(action);
        const response = yield call(userRegister, action.details);
        console.log('user register details' + response.id, response.username);
        yield put(userRegisterAction(response.id, response.username));
    } catch (error) {
        return console.log(error);
    }
}


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
