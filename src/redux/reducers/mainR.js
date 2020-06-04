import {combineReducers} from 'redux';
import authorization from './authorization_r/authorizationR';
import sideDrawer from './side_drawer_r/sideDrawerR';
import user from './user_r/userR';
import deliveryPage from './delivery_page_r/deliveryPageR';
import workPage from './work_page_r/workPageR';

const reducer = combineReducers({
    authorization,
    sideDrawer,
    user,
    deliveryPage,
    workPage
});

export default reducer;