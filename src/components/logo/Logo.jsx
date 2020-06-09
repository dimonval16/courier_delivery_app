import React from "react";
import logoImg from './logo_courier_2.svg';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        alignSelf: 'center',
        marginTop: 40
    }
});

export default function Logo() {
    const s = useStyles();

    return (
        <img className={s.root} src={logoImg} width={165} alt={'orno'}/>
    );
}