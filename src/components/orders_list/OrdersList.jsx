import React, {useEffect} from "react";
import {withRouter} from 'react-router';
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

function OrdersList(props) {
    const s = useStyles();

    const deliveryId = props.deliveryPage.deliveryId;

    useEffect(() => {
        if (deliveryId) props.history.push(`/courier/order${deliveryId}`);
    }, [deliveryId, props.history]);

    const handleButtonClick = (del) => {
        const data = {
            deliveryId: del.deliveryId,
            userAddress: del.userAddress,
            userName: del.userName
        }

        props.onWatchDelivery(data);
    }

    return (
        <List className={s.root}>
            {props.deliveries.map((del, index) => (
                <div key={index}>
                    <ListItem>
                        <ListItemText
                            primary={del.userAddress}
                            secondary={`${del.price} грн. - 11:23`}
                        />
                        <Button color={'primary'} onClick={() => handleButtonClick(del)}>
                            смотреть
                        </Button>
                    </ListItem>
                    <Divider/>
                </div>
            ))}
        </List>
    );
}

export default withRouter(OrdersList);