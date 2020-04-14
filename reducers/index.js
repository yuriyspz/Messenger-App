import {combineReducers} from "redux";
import {reducer as reduxFormReducer} from 'redux-form';
import login from "./login";
import posts from "./posts";

export default combineReducers({
    login,
    posts,
    form: reduxFormReducer
})
