import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const CustomButton = withStyles({
    root: {
        borderRadius: 30,
        height: 56
    }
})(Button);

export default function MainButton({title, color, type, disabled, onClick}) {
    return (
        <CustomButton
            variant={'contained'}
            color={color}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {title}
        </CustomButton>
    );
}