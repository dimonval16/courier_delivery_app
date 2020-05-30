import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        marginTop: 56,
        marginBottom: 56
    }
});

export default function OrdersList(props) {
    const s = useStyles();

    return (
        <List className={s.root}>
            {props.deliveries.map((del, index) => (
                <div key={index}>
                    <ListItem>
                        <ListItemText
                            primary={del.userAddress}
                            secondary={`${del.price} грн. - 11:23`}
                        />
                        <Button color={'primary'}>
                            смотреть
                        </Button>
                    </ListItem>
                    <Divider/>
                </div>
            ))}
        </List>
    );
}