import axios from 'axios'
import {call, put} from 'redux-saga/effects';

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
        yield put({
            type: 'USER_LOGIN',
            payload: {
                token: response.token,
            }
        });
    } catch (error) {
        return console.log(error);
    }
}

// Register
const userRegister = (details) => {
    return axios.post(`${url}security/registration`, details)
        .then(response => {
            console.log(response.data.username)
            return response.data
        });
}

export function* userRegisterAsync(action) {
    try {
        console.log('123');
        const response = yield call(userRegister, action.details);
        console.log('user register details');
        yield put({
            type: "USER_REGISTER",
            payload: {
                username: response.username,
                id: response.id
            }
        });
    } catch (error) {
        return console.log(error);
    }
}
