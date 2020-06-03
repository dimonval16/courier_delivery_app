import React, {useEffect} from 'react';
import {withRouter} from 'react-router';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    finishPage: {
        marginTop: 56,
        marginBottom: 56
    },
    workPage: {
        marginTop: 104,
        marginBottom: 56
    }
});

function OrdersList(props) {
    const s = useStyles();
    const deliveryId = props.deliveryPageId;

    const getDeliveryTime = (data) => {
        const time = new Date(data);
        const hours = time.getHours();
        const minutes = time.getMinutes();
        return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    }

    useEffect(() => {
        if (deliveryId) props.history.push(`/courier/order${deliveryId}`);
    }, [deliveryId, props.history]);

    return (
        <List className={props.use === 'WorkPage' ? s.workPage : s.finishPage}>
            {props.deliveries.map((del, index) => (
                <div key={index}>
                    <ListItem>
                        <ListItemText
                            primary={del.userAddress}
                            secondary={`${del.price} грн. - ${getDeliveryTime(del.deliveryTime)}`}
                        />
                        <Button color={'primary'} onClick={() => props.onWatchDelivery(del, props.use)}>
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