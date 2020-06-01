import React, {useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Redirect, Route, Switch, withRouter} from 'react-router';
import Login from './pages/login/Login';
import StartEndContainer from './pages/start_end/StartEndContainer';
import FinishPageContainer from './pages/finish_page/FinishPageContainer';
import DeliveryInfoContainer from './pages/delivery_info/DeliveryInfoContainer';

const PrivateRoute = ({component: Component, isAuth, ...rest}) => {
    return (
        <Route exact path={rest.path}>
            {isAuth ? <Component/> : <Redirect to={'/courier/signin'}/>}
        </Route>
    );
};

function AppComponent({isAuth, history, deliveryPage}) {
    useEffect(() => {
        if (isAuth) history.push('/courier/main');
    }, [isAuth, history]);

    return (
        <>
            <Switch>
                <Route path={'/courier/signin'} component={Login}/>
                <PrivateRoute path={'/courier/main'} isAuth={isAuth} component={StartEndContainer}/>
                <PrivateRoute path={'/courier/history'} isAuth={isAuth} component={FinishPageContainer}/>
                <PrivateRoute
                    path={`/courier/order${deliveryPage.deliveryId}`}
                    isAuth={isAuth}
                    component={DeliveryInfoContainer}
                />
                <Redirect exact from={'/'} to={'/courier/main'}/>
            </Switch>
        </>
    );
}

function mapStateToProps(state) {
    return {
        isAuth: state.authorization.status,
        deliveryPage: state.deliveryPage
    }
}

export default connect(mapStateToProps)(withRouter(AppComponent));