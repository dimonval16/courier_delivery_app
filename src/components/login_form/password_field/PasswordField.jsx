import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {withStyles} from '@material-ui/core/styles';

const CustomFormControl = withStyles(theme => ({
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
        },
        '& .MuiIconButton-root': {
            color: theme.palette.secondary.main
        },
        '&:hover .MuiIconButton-root': {
            color: theme.palette.primary.main,
        }
    }
}))(FormControl);

export default function PasswordField(props) {
    return (
        <CustomFormControl variant={'outlined'}>
            <InputLabel htmlFor={'outlined-adornment-password'}>
                Password
            </InputLabel>
            <OutlinedInput
                required
                id={'outlined-adornment-password'}
                type={props.showPass ? 'text' : 'password'}
                value={props.pass}
                onChange={props.onHandlePassChange}
                endAdornment={
                    <InputAdornment position={'end'}>
                        <IconButton
                            aria-label={'toggle password visibility'}
                            onClick={props.onHandleIconClick}
                            onMouseDown={e => e.preventDefault()}
                            edge={'end'}
                        >
                            {props.showPass ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={70}
            />
        </CustomFormControl>
    );
}