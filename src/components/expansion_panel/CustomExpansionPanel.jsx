import React, {useState} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    order: {
        boxShadow: 'none',
    },
    orderSummary: {
        padding: 0,
    },
    orderDetails: {
        flexDirection: 'column',
    }
});

export default function CustomExpansionPanel({del}) {
    const s = useStyles();

    const [expanded, setExpanded] = useState(false);

    return (
        <ExpansionPanel className={s.order} expanded={expanded} onChange={() => setExpanded(!expanded)}>
            <ExpansionPanelSummary
                className={s.orderSummary}
                expandIcon={<ExpandMoreIcon/>}
            >
                <Typography>Заказ</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={s.orderDetails}>
                {del.orders.map((order, index) => (
                    <Typography key={index}>
                        {`${order.productName} — ${order.productWeight}. — ${order.price} грн.`}
                    </Typography>
                ))}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

