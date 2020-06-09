import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CustomIcon from "../custom_icon/CustomIcon";

const useStyles = makeStyles({
    list: {
        width: 300
    },
    user: {
        fontSize: 20,
        margin: '20px 0 20px 20px',
    }
});

export default function SideDrawer(props) {
    const s = useStyles();

    return (
        <>
            <Drawer open={props.open} onClose={props.onToggleDrawer}>
                <div className={s.list} role={'presentation'}>
                    <div className={s.user}>
                        {`Привет, ${props.username}.`}
                    </div>
                    <Divider/>
                    <List>
                        {props.items.map((item, index) => (
                            <ListItem
                                button
                                key={index}
                                onClick={() => props.onClick(item.title)}
                            >
                                <ListItemIcon>
                                    <CustomIcon icon={item.icon}/>
                                </ListItemIcon>
                                <ListItemText primary={item.title === 'Баланс' ?
                                    `${item.title}: ${props.balance} грн` : item.title}
                                />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </>
    );
}