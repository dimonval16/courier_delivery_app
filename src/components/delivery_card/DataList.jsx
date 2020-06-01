import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
    root:{
        marginBottom: 95,
    },
    list: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-between'
    },
    listFirst: {
        marginTop: 7,
        display: 'flex',
        justifyContent: 'space-between'
    },
    rightText: {
        textAlign: 'right'
    },
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

export default function DataList({del}) {
    const s = useStyles();

    const deliveryData = [
        {leftContent: del.partnerName, rightContent: del.partnerAddress},
        {leftContent: 'Заказ поступил:', rightContent: del.deliveryData.slice(11, 16)},
        {leftContent: 'Заказ выполнен:', rightContent: del.deliveryTime.slice(11, 16)},
        {leftContent: 'Комментарий:', rightContent: del.userComment ? del.userComment : '-'},
        {leftContent: 'К оплате:', rightContent: `${del.price} грн`}
    ];

    const [expanded, setExpanded] = useState(false);

    return (
        <div className={s.root}>
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
            {deliveryData.map((item, index) => (
                <Typography
                    className={item.leftContent === del.partnerName ? s.listFirst : s.list}
                    key={index}
                >
                    <span>{item.leftContent}</span>
                    <span className={s.rightText}>{item.rightContent}</span>
                </Typography>
            ))}
        </div>
    );
}