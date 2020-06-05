import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function OrderDetails({deliveryData, del, s}) {
    const isFinished = del.PerformedByAPartner && del.DeliveredBy && del.payment;

    return (
        <>
            {deliveryData.map((item, index) => (
                <Typography
                    className={item.leftContent === 'В работе:' ?
                        del.responsibleCourier && !isFinished ? `${s.list} ${s.listInWork}` : s.listHid
                        :
                        item.leftContent === del.partnerName ? s.listFirst : s.list}
                    key={index}
                >
                    <span>{item.leftContent}</span>
                    <span
                        className={item.leftContent === 'Статус:' ?
                            del.payment ? s.goodStatusText : s.badStatusText
                            :
                            s.rightText}
                    >
                        {item.rightContent}
                    </span>
                </Typography>
            ))}
        </>
    );
}