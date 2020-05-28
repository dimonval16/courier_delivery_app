import React, {useEffect} from 'react';
import './App.css';
import {Redirect, Route, Switch, withRouter} from "react-router";
import {connect} from "react-redux";
import Login from "./pages/login/Login";
import StartEnd from "./pages/start_end/StartEnd";

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
    return (
        <Route exact path={rest.path}>
            {isAuth ? <Component /> : <Redirect to={'/courier/signin'} />}
        </Route>
    );
};

function AppComponent({isAuth, history}) {
    useEffect(() => {
        if (isAuth) history.push('/courier/main');
    }, [isAuth, history])

    return (
        <>
            <Switch>
                <Route path={'/courier/signin'} component={Login}/>
                <PrivateRoute path={'/courier/main'} isAuth={isAuth} component={StartEnd}/>
                <Redirect exact from={'/'} to={'/courier/main'} />
            </Switch>
        </>
    );
}

function mapStateToProps(state) {
    return {
        isAuth: state.authorization.status
    }
}

export default connect(mapStateToProps)(withRouter(AppComponent))