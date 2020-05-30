import React, {useState} from "react";
import s from './LoginForm.module.css';
import EmailField from "./email_field/EmailField";
import PasswordField from "./password_field/PasswordField";
import MainButton from "../buttons/MainButton";

export default function LoginForm(props) {
    const [values, setValues] = useState({
        email: '',
        pass: '',
        showPassword: false,
    });

    const handleSubmit = e => {
        e.preventDefault();
        if (values.email && values.pass.length >= 6) props.onLogin();
    };

    return (
        <form className={s.wrapper} onSubmit={handleSubmit}>
            <EmailField
                email={values.email}
                onHandleEmailChange={e => setValues({...values, email: e.target.value})}
            />
            <PasswordField
                pass={values.pass}
                showPass={values.showPassword}
                onHandleIconClick={() => setValues({...values, showPassword: !values.showPassword})}
                onHandlePassChange={e => setValues({...values, pass: e.target.value})}
            />
            <MainButton
                title={'Войти'}
                color={'primary'}
                type={'submit'}
            />
        </form>
    );
}