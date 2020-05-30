import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import CustomIcon from "../custom_icon/CustomIcon";

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        marginLeft: 15
    },
}));

export default function HeaderMain({title, rightTitle, onButtonClick, anotherIcon}) {
    const s = useStyles();

    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton
                        edge={'start'}
                        color={'inherit'}
                        aria-label={'menu'}
                        onClick={onButtonClick}
                    >
                        {anotherIcon ? <CustomIcon icon={anotherIcon}/> : <MenuIcon/>}
                    </IconButton>
                    <div className={s.content}>
                        <Typography variant={'h6'} color={'inherit'} className={s.title}>
                            {title}
                        </Typography>
                        <Typography variant={'h6'} color={'inherit'}>
                            {rightTitle}
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}