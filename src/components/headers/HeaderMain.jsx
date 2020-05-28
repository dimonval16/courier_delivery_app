import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    title: {
        marginLeft: 15
    }
}));

export default function HeaderMain({title, onButtonClick}) {
    const classes = useStyles();

    return (
        <>
            <AppBar position={'static'}>
                <Toolbar>
                    <IconButton
                        edge={'start'}
                        color={'inherit'}
                        aria-label={'menu'}
                        onClick={onButtonClick}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant={'h6'} color={'inherit'} className={classes.title}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}