import axios from 'axios'
import {call, put} from 'redux-saga/effects';

const url = `https://fluxjwt-app.herokuapp.com/api/security/login`

const userLogin = (username, password) => {
    console.log({username: username, password: password})
    return axios.post(url, {username: username, password: password})
        .then(response => response.data);
}

export default function* userLoginAsync(action) {
    try {

        const response = yield call(userLogin, action.username, action.password);
        console.log(response);
        yield put({
            type: 'USER_LOGIN',
            payload: {
                username: response.username,
                userpassword: response.userpassword,
            }
        });
    } catch (error) {
        return console.log(error);
    }
}
