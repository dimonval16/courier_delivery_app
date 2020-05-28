import React from "react";
import logoImg from './logo_courier_2.svg';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        alignSelf: "center",
        marginTop: 30
    }
});

export default function Logo() {
    const classes = useStyles();

    return (
        <img className={classes.root} src={logoImg} width={165} alt={'orno'}/>
    );
}