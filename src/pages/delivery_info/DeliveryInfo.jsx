import React from 'react';
import HeaderMain from '../../components/headers/HeaderMain';
import DeliveryCard from "../../components/delivery_card/DeliveryCard";

export default function DeliveryInfo({deliveryPage, ...props}) {
    const getSessionDate = data => {
        const finishData = new Date(data);
        const day = finishData.getDate();
        const month = `${finishData.getMonth() + 1}`;
        const year = finishData.getFullYear();
        return `${day}.${month}.${year}`;
    }

    const handleOrderClick = (title) => {
        if (title === 'Принять') props.onStartOrder(props.courierId, deliveryPage.deliveryId);
        else if (title === 'Завершить') props.onFinishOrder(props.courierId, deliveryPage.deliveryId);
    }

    const handleButtonClick = () => {
        props.onCLearDeliveryInfo();
        if (props.use === 'HistoryPage') {
            props.history.push('/courier/history');
        } else if (props.use === 'WorkPage') {
            props.history.push('/courier/orders');
        } else if (props.use === 'ArchiveDeliveries') {
            props.history.push('/courier/archivehistory');
        }
    }

    return (
        <>
            <HeaderMain
                title={`Заказ: ${deliveryPage.deliveryId}`}
                rightTitle={getSessionDate(deliveryPage.deliveryData)}
                anotherIcon={'arrow_back_ios'}
                onButtonClick={handleButtonClick}
            />
            <DeliveryCard
                del={deliveryPage}
                onOrderClick={handleOrderClick}
            />
        </>
    );
}