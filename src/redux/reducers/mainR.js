import {combineReducers} from "redux";
import authorization from './authorizationR/authorizationR';
import sideDrawer from './sideDrawerR/sideDrawerR';
import user from './userR/userR';

const reducer = combineReducers({
    authorization,
    sideDrawer,
    user
});

export default reducer;