import {combineReducers} from "redux";
import authorization from './authorizationR/authorizationR';
import sideDrawer from './sideDrawerR/sideDrawerR';
import user from './userR/userR';
import deliveryPage from './deliveryPageR/deliveryPageR';
import workPage from './workPageR/workPageR';

const reducer = combineReducers({
    authorization,
    sideDrawer,
    user,
    deliveryPage,
    workPage
});

export default reducer;