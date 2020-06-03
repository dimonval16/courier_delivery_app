import React from 'react';
import {dataListStyles} from '../deliveryCardStyles';
import CustomExpansionPanel from "../../expansion_panel/CustomExpansionPanel";
import OrderDetails from "./OrderDetails";

export default function DataList({del}) {
    const s = dataListStyles();

    const calculateTime = (data, param) => {
        if (param) {
            const deliveryTime = new Date(data).getTime();
            const interval = param * 60 * 1000;
            const takeOrderTime = new Date(deliveryTime - interval)
            const hours = takeOrderTime.getHours();
            const minutes = takeOrderTime.getMinutes();
            return `${hours}:${minutes}`;
        } else {
            const hours = new Date(data).getHours();
            const minutes = new Date(data).getMinutes();
            return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
        }
    }

    const deliveryData = [
        {leftContent: del.partnerName, rightContent: del.partnerAddress},
        {leftContent: 'Заказ поступил:', rightContent: calculateTime(del.deliveryData)},
        {leftContent: 'Забрать:', rightContent: calculateTime(del.deliveryTime, 30)},
        {leftContent: 'Доставить:', rightContent: calculateTime(del.deliveryTime)},
        {leftContent: 'Тип оплаты:', rightContent: del.cash ? 'Наличные' : 'Онлайн'},
        {leftContent: 'К оплате:', rightContent: `${del.price} грн`},
        {leftContent: 'Статус:', rightContent: del.payment ? 'Оплачено' : 'Не оплачено'},
        {leftContent: 'Комментарий:', rightContent: del.userComment ? del.userComment : '-'}
    ];

    return (
        <div className={s.root}>
            <CustomExpansionPanel del={del}/>
            <OrderDetails deliveryData={deliveryData} del={del} s={s}/>
        </div>
    );
}