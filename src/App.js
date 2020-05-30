import React, {useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Redirect, Route, Switch, withRouter} from 'react-router';
import Login from './pages/login/Login';
import StartEndHandler from './pages/start_end/StartEndHandler';
import FinishPageHandler from './pages/finish_page/FinishPageHandler';

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
    }, [isAuth, history]);

    return (
        <>
            <Switch>
                <Route path={'/courier/signin'} component={Login}/>
                <PrivateRoute path={'/courier/main'} isAuth={isAuth} component={StartEndHandler}/>
                <PrivateRoute path={'/courier/history'} isAuth={isAuth} component={FinishPageHandler}/>
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

export default connect(mapStateToProps)(withRouter(AppComponent));