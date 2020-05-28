import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const LoginCustomButton = withStyles({
    root: {
        borderRadius: 30,
        height: 56
    }
})(Button);

export default function MainButton(props) {
    return (
        <LoginCustomButton
            variant={'contained'}
            color={'primary'}
            type={'submit'}
        >
            {props.title}
        </LoginCustomButton>
    );
}