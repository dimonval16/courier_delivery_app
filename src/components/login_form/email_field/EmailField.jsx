import React from "react";
import {withStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";

const CustomEmailField = withStyles(theme => ({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.secondary.main,
                borderWidth: 2,
                borderRadius: 10
            },
            '&:hover fieldset': {
                borderColor: theme.palette.primary.main,
            }
        },
        '& label': {
            color: theme.palette.secondary.main,
        },
        '&:hover label': {
            color: theme.palette.primary.main,
        }
    }
}))(TextField);

export default function EmailField(props) {
    return (
        <CustomEmailField
            fullWidth={true}
            required
            variant={'outlined'}
            type={'email'}
            id={'custom-css-outlined-input'}
            label={'Email'}
            value={props.email}
            onChange={props.onHandleEmailChange}
        />
    );
}