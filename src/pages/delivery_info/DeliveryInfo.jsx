import React from 'react';
import HeaderMain from '../../components/headers/HeaderMain';
import DeliveryCard from "../../components/delivery_card/DeliveryCard";

export default function DeliveryInfo({deliveryPage, ...props}) {
    const getSessionDate = () => {
        const finishData = deliveryPage.orderData;
        const day = finishData.slice(8, 10);
        const month = finishData.slice(5, 7);
        const year = finishData.slice(2, 4);
        return `${day}.${month}.${year}`;
    }

    const handleButtonClick = () => {
        props.onCLearDeliveryInfo();
        props.history.push('/courier/history');
    }

    return (
        <>
            <HeaderMain
                title={`Заказ: ${deliveryPage.deliveryId}`}
                rightTitle={getSessionDate()}
                anotherIcon={'arrow_back_ios'}
                onButtonClick={handleButtonClick}
            />
            <DeliveryCard
                del={deliveryPage}
            />
        </>
    );
}