import axios from 'axios'
import {createCommentAction, getCommentsAction, getPostsAction, userLoginAction, userRegisterAction} from "../actions";
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
        const response = yield call(userRegister, action.details);
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
            return response.data
        })
        .catch(error => console.log(error));
}

// Get comments

function* watchCommentsRender() {
    yield takeEvery('GET_COMMENTS_ATTEMPT', getCommentsAsync);
}

export function* getCommentsAsync() {
    try {
        const token = yield AsyncStorage.getItem('userToken')
        const response = yield call(getComments, token);
        yield put(getCommentsAction(response));
    } catch (error) {
        return console.log(error);
    }
}

const getComments = (token) => {
    return axios.get(`${url}comment`, {
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

//Create Comment

function* watchCreateComment() {
    yield takeEvery('CREATE_COMMENT_ATTEMPT', createCommentAsync);
}

export function* createCommentAsync(action) {
    try {
        const token = yield AsyncStorage.getItem('userToken')
        const response = yield call(createComment, action.postid, action.comment, token);
        yield put(createCommentAction(response, action.postid));
    } catch (error) {
        return console.log(error);
    }
}

const createComment = (postid, comment, token) => {
    return axios.post(`${url}comment/user/${postid}`, {"comment":comment},
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => {
            return response.data
        })
        .catch(error => console.log(error));
}


export default function* rootSaga() {
    yield all([
        watchUserLogin(),
        watchUserRegister(),
        watchPostsRender(),
        watchCommentsRender(),
        watchCreateComment(),
    ])
}
