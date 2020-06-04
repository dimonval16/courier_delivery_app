import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const CustomButton = withStyles({
    root: {
        borderRadius: 30,
        height: 56
    }
})(Button);

export default function MainButton({title, color, type, disabled, onClick, ...props}) {
    return (
        <CustomButton
            className={props.className}
            variant={'contained'}
            color={color}
            type={type}
            disabled={disabled}
            onClick={() => {if(type !== 'submit')onClick(title)}}
        >
            {title}
        </CustomButton>
    );
}