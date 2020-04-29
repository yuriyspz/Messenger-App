import {combineReducers} from "redux";
import {reducer as reduxFormReducer} from 'redux-form';
import login from "./login";
import comments from "./comments";
import posts from "./posts";

export default combineReducers({
    login,
    posts,
    comments,
    form: reduxFormReducer
})
