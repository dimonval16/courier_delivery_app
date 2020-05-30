import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        top: 'auto',
        bottom: 0,
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.3)'
    },
    content: {
        display: "flex",
        justifyContent: "space-between",
        padding: '0 20px'
    }
}));

export default function Footer(props) {
    const s = useStyles();

    return (
        <>
            <AppBar className={s.root}>
                <Toolbar className={s.content}>
                    <Typography variant={'h6'}>Баланс:</Typography>
                    <Typography variant={'h6'}>{`${props.balance} грн`}</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}