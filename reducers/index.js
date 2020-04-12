import {combineReducers} from "redux";
import {reducer as reduxFormReducer} from 'redux-form';
import login from "./login";

export default combineReducers({
    login,
    form: reduxFormReducer
})
