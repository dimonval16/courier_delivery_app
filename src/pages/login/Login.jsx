import React from "react";
import {connect} from 'react-redux';
import s from './Login.module.css';
import LoginForm from "../../components/login_form/LoginForm";
import Logo from "../../components/logo/Logo";
import {loginAC} from "../../redux/actions/mainA";

function LoginComponent({onLogin}) {
    return (
        <div className={s.wrapper}>
            <Logo/>
            <LoginForm onLogin={onLogin}/>
        </div>
    );
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        onLogin: () => dispatch(loginAC())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);