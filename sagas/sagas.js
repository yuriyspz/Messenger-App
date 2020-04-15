import axios from 'axios'
import {getPostsAction, userLoginAction, userRegisterAction} from "../actions";
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {navigate} from '../App'
import {AsyncStorage} from "react-native";

const url = `https://fluxjwt-app.herokuapp.com/api/`

// Register
function* watchUserRegister() {
    yield takeEvery('USER_REGISTER_ATTEMPT', userRegisterAsync);
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

const userRegister = (details) => {
    return axios.post(`${url}security/registration`, details)
        .then(response => {
            navigate('Sign In');
            return response.data
        })
        .catch(error => console.log(error));
}

//Sign in
function* watchUserLogin() {
    yield takeEvery('USER_LOGIN_ATTEMPT', userLoginAsync);
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

const userLogin = (username, password) => {
    return axios.post(`${url}security/login`, {username, password})
        .then(response => {
            AsyncStorage.setItem('userToken', response.data.token);
            navigate('Posts')
            return response.data
        })
}

//Get posts
function* watchPostsRender() {
    yield takeEvery('GET_POSTS_ATTEMPT', getPostsAsync);
}

export function* getPostsAsync() {
    try {
        const token = yield AsyncStorage.getItem('userToken')
        const response = yield call(getPosts, token);
        console.log(response)
        yield put(getPostsAction(response));
    } catch (error) {
        return console.log(error);
    }
}

const getPosts = (token) => {
    console.log(token);
    return axios.get(`${url}message`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => console.log(error));
}

export default function* rootSaga() {
    yield all([
        watchUserLogin(),
        watchUserRegister(),
        watchPostsRender(),
    ])
}
